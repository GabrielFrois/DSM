function adicionarAnimal(event) {
    event.preventDefault();

    // Captura os valores do formulário
    const nome = document.getElementById("nome").value;
    const ordem = document.getElementById("ordem").value;
    const classe = document.getElementById("classe").value;

    // Cria um novo item de lista
    const lista = document.getElementById("listaAnimais");
    const item = document.createElement("li");

    // Adiciona o texto com os dados do animal
    item.textContent = `Nome: ${nome}, Ordem: ${ordem}, Classe: ${classe}`;

    // Adiciona o item à lista
    lista.appendChild(item);

    // Limpa os campos do formulário
    document.getElementById("CadAnimais").reset();
}

// Associa a função ao evento de envio do formulário
document.getElementById("CadAnimais").addEventListener("submit", adicionarAnimal);
