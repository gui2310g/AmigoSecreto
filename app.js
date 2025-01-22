const amigos = [];
const listaAmigos = document.querySelector(".name-list");
const listaSorteio = document.querySelector(".result-list");
const amigosdaLista = document.createElement("li");
const amigoSorteado = document.createElement("li");
listaAmigos.appendChild(amigosdaLista);
listaSorteio.appendChild(amigoSorteado);

function adicionarAmigo() {
    const amigo = document.querySelector("#amigo").value 

    if(amigo == '') alert("necessario escrever o nome"); 

    listaAmigos.innerHTML = "";

    amigos.push(amigo); 
    
    const lista = (amigos) => listaAmigos.innerHTML += `${amigos} `

    return amigos.forEach(lista);
}

function sortearAmigo() {
    if(amigos.length == 0) return alert("sem amigos sem sorteio")
        
    const sorteio = Math.floor(Math.random() * amigos.length)

    listaSorteio.innerHTML = "";

    return listaSorteio.innerHTML += `o sorteado da noite foi ${amigos[sorteio]}`;
}
