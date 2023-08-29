class All {
    constructor(tutor, name, especie, foto, calendario){
        this.tutor = tutor;
        this.name = name;
        this.especie = especie;
        this.foto = foto;
        this.calendario = calendario;
    }
}

function cadastrar(){
    let tutor = document.getElementById("tutor").value;
    let name = document.getElementById("name").value;
    let especie = document.getElementById("especie").value;
    let foto = document.getElementById("foto").value;
    let calendario = document.getElementById("calendario").value;
    let show = new All(tutor, name, especie, foto, calendario);
    console.log(show)
lista.add(show);
}
//
class List{
    constructor(){
        this.lista = [];
    }
    add(pet){
        if (verify()) {
            mensg("Preencha os campos", "errou");
        } else {
            this.lista.push(pet);
            mensg("Cadastrado!", "permitido")
            console.log(this.lista);
        }
    }
    }
    const lista = new List()

    //

    function mensg(msg, tipo){
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

    
    console.log({tutor});
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