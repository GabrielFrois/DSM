document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("cadastroForm");
    const resultadosDiv = document.getElementById("resultados");
  
    form.addEventListener("submit", (event) => {
      event.preventDefault();
  
      const nome = document.getElementById("nome").value;
      const idade = parseInt(document.getElementById("idade").value, 10);
      const bairro = document.getElementById("bairro").value;
  
      let categoria;
      if (idade <= 18) {
        categoria = "Junior";
      } else if (idade <= 25) {
        categoria = "Expert";
      } else {
        categoria = "Master";
      }
  
      let local;
      if (bairro === "jardim das oliveiras" || bairro === "vila romana") {
        local = "Zona Sul";
      } else if (bairro === "jardim do portal" || bairro === "jardim panorama") {
        local = "Zona Oeste";
      }
  
      if (!document.getElementById("tabelaResultados")) {
        const table = document.createElement("table");
        table.id = "tabelaResultados";
        table.className = "table table-bordered mt-3";
  
        const thead = document.createElement("thead");
        const headerRow = document.createElement("tr");
        ["Nome", "Idade", "Categoria", "Local"].forEach((headerText) => {
          const th = document.createElement("th");
          th.textContent = headerText;
          headerRow.appendChild(th);
        });
        thead.appendChild(headerRow);
        table.appendChild(thead);
  
        const tbody = document.createElement("tbody");
        tbody.id = "tabelaBody";
        table.appendChild(tbody);
  
        resultadosDiv.appendChild(table);
      }
  
      const tbody = document.getElementById("tabelaBody");
      const row = document.createElement("tr");
  
      [nome, idade, categoria, local].forEach((cellText) => {
        const td = document.createElement("td");
        td.textContent = cellText;
        row.appendChild(td);
      });
  
      tbody.appendChild(row);
  
      form.reset();
    });
  });
  