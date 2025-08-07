class Pessoa {
    nome:string;
    email:string;
    nasc:string;

    constructor(nome:string, email:string, nasc:string){
        this.nome = nome;
        this.email = email;
        this.nasc = nasc;
    }

    imprimir():void{
        console.log("Nome: " + this.nome);
        console.log("Email: " + this.email);
        console.log("Data de Nascimento: " + this.nasc);
        console.log("Idade: " + this.idade(this.nasc) + " anos");
        console.log("Anos Bissextos: " + this.numBissextos());

    }

    public idade(nasc:any):number{
        const hoje = new Date();
        const ano:number = parseInt(nasc.substring(6, 10));
        const mes:number = parseInt(nasc.substring(3, 5)) - 1;
        const dia:number = parseInt(nasc.substring(0, 2));

        const datan = new Date(ano, mes, dia);

        let idade:number = hoje.getFullYear() - datan.getFullYear();

        const m:number = hoje.getMonth() - datan.getMonth();
        
        if(m < 0 || (m === 0 && hoje.getDate() < datan.getDate())){
            idade--;
        }
        return idade;
    }

    public numBissextos():number{
        const ano:number = parseInt(this.nasc.substring(6, 10));
        const hoje = new Date();
        const anoAtual = hoje.getFullYear();
        let quant:number = 0;

        for(let x = ano; x <= anoAtual; x++){
            if(DataUtil.isBissexto(x)){
                //console.log(x);
                quant++
            }
        }
        return quant;
    }
}

class DataUtil{
    static isBissexto(ano:number){
        if(ano % 400 == 0){
            return true;
        } else if (ano % 4 == 0 && ano % 100 != 0){
            return true;
        }
        return false;
    }
}

const cliente = new Pessoa("Gabriel", "gabriel@gmail.com", "17/07/2001");

cliente.imprimir();