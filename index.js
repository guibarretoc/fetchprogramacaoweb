const lista = document.getElementById("lista");
const btn = document.getElementById("btn");

let dados = {};

const renderizaFoto = (lista, foto) => {
  lista.innerHTML = "";
    const img = document.createElement("img");
    img.src = `${foto.message}`;

    lista.appendChild(img);
};

const getFoto = (url) => {
  console.log("antes do fetch");
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      dados = data;
      console.log(data);
      renderizaFoto(lista, data);
    });
  console.log("após o fetch");
};

const handleBtnClick = () => {
    getFoto("https://dog.ceo/api/breeds/image/random");
};

getFoto("https://dog.ceo/api/breeds/image/random");


btn.onclick = handleBtnClick;