let amigos = []; // Array para armazenar os nomes dos participantes

// Função para adicionar um amigo
function adicionarAmigo() {
    let input = document.getElementById("amigo");
    let nome = input.value.trim(); // Remove espaços extras

    if (nome && !amigos.includes(nome)) {
        amigos.push(nome);
        
        // Atualiza a lista após adicionar
        atualizarLista();

        // Limpa o campo de input
        input.value = "";
        input.focus();
    } else {
        alert("Nome inválido ou já inserido.");
    }
}

// Função para atualizar a lista de amigos na tela
function atualizarLista() {
    let lista = document.getElementById("listaAmigos"); // Seleciona a lista HTML
    lista.innerHTML = ""; // Limpa a lista existente

    // Percorre o array amigos e cria um item <li> para cada nome
    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement("li"); // Cria um novo item <li>
        item.textContent = amigos[i]; // Define o nome do amigo
        lista.appendChild(item); // Adiciona o item à lista
    }
}
function sortearAmigo() {
    if (amigos.length === 0) { // Verifica se há amigos na lista
        alert("Não há amigos para sortear.");
        return;
    }

    // Gera um índice aleatório entre 0 e o número de amigos - 1
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio]; // Obtém o nome sorteado

    // Exibe o resultado na tela
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>Seu amigo secreto é: <strong>${amigoSorteado}</strong></li>`;
}

function reiniciarJogo() {
    amigos = []; // Limpa o array de amigos
    atualizarLista(); // Atualiza a lista na tela (vai limpar os itens)
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; // Limpa o resultado do sorteio

    let input = document.getElementById("amigo");
    input.value = ""; // Limpa o campo de entrada
    input.focus(); // Foca no campo de entrada para digitar novamente
}
