import * as fs from "fs";
import { parse } from "csv-parse";
import nodemailer from "nodemailer";
import DataUtil from "./DataUtil";
("use strict");
import "dotenv/config";

// https://github.com/nodemailer/nodemailer/blob/master/examples/full.js

async function lerArq(
  caminhoArquivo: string,
  columns: boolean,
  delimiter: string
): Promise<any[]> {
  return new Promise((resolve, reject) => {
    const registros: string[] = [];

    const leitor = fs.createReadStream(caminhoArquivo).pipe(
      parse({
        columns: columns,
        skip_empty_lines: true,
        delimiter: delimiter,
      })
    );

    leitor.on("data", (linha) => {
      registros.push(linha);
    });

    leitor.on("end", () => {
      resolve(registros);
    });

    leitor.on("error", (erro) => {
      reject(erro);
    });
  });
}

async function main() {
  const caminhocsv = "./src/emails.csv";
  const caminhohtml = "./src/Mensagem.html";
  let html: string;
  let linhashtml: string[];
  let htmlemail: string;
  try {
    html = fs.readFileSync(caminhohtml, "utf-8");
    linhashtml = html.split("\n");
  } catch (error) {
    console.error("Error reading file:", error);
  }

  try {
    const linhascsv = await lerArq(caminhocsv, true, ";");
    linhascsv.forEach((dados) => {
      htmlemail = "";
      for (const linha of linhashtml) {
        if (linha.indexOf("{{nome}}") >= 0) {
          htmlemail += linha.replace("{{nome}}", dados.Nome) + "\n";
        } else if (linha.indexOf("{{percdesc}}") >= 0) {
          htmlemail +=
            linha.replace("{{percdesc}}", idade(dados.Nasc).toString()) + "\n";
        } else if (linha.indexOf("{{mesquevem}}") >= 0) {
          let hoje: Date = new Date();
          htmlemail += linha.replace(
            "{{mesquevem}}",
            "(" +
              DataUtil.mesExtenso(hoje.getMonth() + 2) +
              "/" +
              hoje.getFullYear() +
              ").\n"
          );
        } else {
          htmlemail += linha + "\n";
        }
      }
      enviarEmail(
        dados.Nome,
        dados.Email,
        "Oferta especial para você",
        htmlemail
      );
    });
  } catch (erro) {
    console.error("Erro ao ler o arquivo:", erro);
  }
}

async function enviarEmail(
  destinatario: string,
  email: string,
  assunto: string,
  corpo: string
) {
  const nodemailer = require("nodemailer");

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Message object
  let message = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: assunto,
    html: corpo,
  };

  transporter.sendMail(message, (error: any, info: any) => {
    if (error) {
      console.log("Error occurred");
      console.log(error.message);
      return process.exit(1);
    }

    console.log("Message sent successfully!");
    console.log(nodemailer.getTestMessageUrl(info));

    transporter.close();
  });
}

function idade(nasc: any): number {
  const hoje = new Date();
  let datan: any;
  if (typeof nasc === "string") {
    const ano: number = parseInt(nasc.substring(6, 10));
    const mes: number = parseInt(nasc.substring(3, 5)) - 1;
    const dia: number = parseInt(nasc.substring(0, 2));
    datan = new Date(ano, mes, dia);
  } else {
    datan = nasc;
  }

  let idade: number = hoje.getFullYear() - datan.getFullYear();
  const m: number = hoje.getMonth() - datan.getMonth();

  if (m < 0 || (m === 0 && hoje.getDate() < datan.getDate())) {
    idade--;
  }

  return idade;
}

main().catch((err) => {
  console.error(err.message);
  process.exit(1);
});
