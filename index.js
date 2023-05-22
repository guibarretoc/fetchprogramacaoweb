const lista = document.getElementById("lista");
const btFato = document.getElementById("btFato");

let dados = {};

const renderizaLista = (lista, fatos) => {
  lista.innerHTML = "";
    const itemText = document.createTextNode(
      `${fatos.fact}
      
      (Quantidade de caracteres:${fatos.length})`
    );
    const listItem = document.createElement("li");
    listItem.appendChild(itemText);
    lista.appendChild(listItem);
};

const getPessoas = (url) => {
  console.log("antes do fetch");
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      dados = data;
      console.log(data);
      renderizaLista(lista, data);
    });
  console.log("após o fetch");
};

const handleBtFatoClick = () => {
  window.location.reload();
};

getPessoas("https://catfact.ninja/fact");


btFato.onclick = handleBtFatoClick;
