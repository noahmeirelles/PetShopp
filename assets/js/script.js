class All {
    constructor(tutor, name, especie, foto, calendario) {
        this.tutor = tutor;
        this.name = name;
        this.especie = especie;
        this.foto = foto;
        this.calendario = calendario;
        this.age = this.calculateAge();
    }
    calculateAge() { const today = new Date(); const birthdate = new Date(this.calendario); let age = today.getFullYear() - birthdate.getFullYear(); const m = today.getMonth() - birthdate.getMonth(); if (m < 0 || (m === 0 && today.getDate() < birthdate.getDate())) { age--; } return age; }
}

function cadastrar() {
    let tutor = document.getElementById("tutor").value;
    let name = document.getElementById("name").value;
    let especie = document.getElementById("especie").value;
    let foto = document.getElementById("foto").value;
    let calendario = document.getElementById("calendario").value;
    let show = new All(tutor, name, especie, foto, calendario);
    console.log(show)
    listaC.add(show);
    renderização();
}
//
class List {
    constructor() {
        this.lista = [];
    }
    add(pet) {
        if (verify()) {
            mensg("Preencha os campos", "errou");
        } else if (!isURLValida(pet.foto)) {
            mensg("URL Invalida", "errou"); x
        }
        else {
            this.lista.push(pet);
            mensg("Cadastrado!", "permitido")
            console.log(this.lista);
        }
        clearFields();
    }
}
const listaC = new List()

//

function mensg(msg, tipo) {
    let msgDiv = document.getElementById("msg");
    msgDiv.innerHTML = "";

    let msgParaTela = `
        <p class='${tipo}'>${msg}</p>
    `
    msgDiv.innerHTML += msgParaTela;



    setTimeout(function () {
        msgDiv.innerHTML = "";
    }, 3000);
}

//

function verify() {
    let tutor = document.getElementById("tutor").value;
    let name = document.getElementById("name").value;
    let especie = document.getElementById("especie").value;
    let foto = document.getElementById("foto").value;
    let calendario = document.getElementById("calendario").value;


    console.log({ tutor });
    console.log({ name });
    console.log({ especie });
    console.log({ foto });
    console.log({ calendario });

    if (tutor == "" || name == "" || especie == "" || foto == "" || calendario == "") {

        console.log("Ta vazio");

        return true;
    } else {
        console.log("Prft");
        return false;
    }
}
function renderização() {
    // const newPage = document.getElementById("exibir");
    // newPage.innerHtml = "";

    // let ray = listaC.lista

    // ray.forEach(shopp => {
    //     const petshopp = `
    //     <div>
    //     <img src="${shopp.foto}" alt="${shopp.name}">
    //     <h1>Nome do Tutor: ${shopp.tutor}</h1>
    //     <h1>Nome do sersinho: ${shopp.name}</h1>
    //     <h1>A espécie do sersinho é a: ${shopp.especie}</h1>
    //     <h1>Idade: ${shopp.calendario} anos humanos</h1>
    //     <h1>Idade: ${shopp.age} anos humanos</h1>
    //     </div>
    //     `
    //     newPage.innerHTML += petshopp
    // });
    let content = '';

    let ray = listaC.lista

    ray.forEach(pet => {
        content += `
        <div>
         <img src="${pet.foto}" alt="${pet.name}">
         <h1>Nome do Tutor: ${pet.tutor}</h1>
         <h1>Nome do sersinho: ${pet.name}</h1>
         <h1>A espécie do sersinho é a: ${pet.especie}</h1>
         <h1>Idade: ${pet.age} anos humanos</h1>
        </div>
        `
    });
    document.getElementById("exibir").innerHTML = content;

}
function clearFields() {
    document.getElementById("tutor").value = "";
    document.getElementById("name").value = "";
    document.getElementById("especie").value = "";
    document.getElementById("foto").value = "";
    document.getElementById("calendario").value = "";
};





function showRegister() {
    document.getElementById("list-container").classList.remove("hidd");
    document.getElementById("pai2").classList.add("hidd");
    renderização();
}
function showRegistered() {
    document.getElementById("pai2").classList.remove("hidd");
    document.getElementById("list-container").classList.add("hidd");
}
function isURLValida(url) {
    if (url.match(/\.(jpeg|jpg|gif|png)$/) != null) { return true; }
    else { return false; }
}