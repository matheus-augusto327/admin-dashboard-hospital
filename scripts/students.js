let cursoEdificacoes = [
    "Anael",
    "Baxter",
    "Cláudio",
    "Derick",
    "Eren",
    "Fabrício",
    "Gabriel",
    "Horácio",
    "Ingrid",
    "Jaqueline",
    "Kariny",
    "Leonardo",
    "Marceline",
]

let cursoBeleza = [
    "André",
    "Beatriz",
    "Caroline",
    "Dorival",
    "Elaine",
    "Fábio",
    "Giraldi",
    "Hipócrates",
    "Iraci",
    "Jocelino",
    "Kaique",
    "Lúcio",
    "Magnocleide",
]

let cursoGastronomia = [
    "Arnaldo",
    "Bianca",
    "Cleber",
    "Daiane",
    "Eduardo",
    "Fernanda",
    "Gabriela",
    "Hugo",
    "Ivaldir",
    "Juracir",
    "Kalebe",
    "Lino",
    "Marcelo",
]

let cursoTecnologia = [
    "Avdol",
    "Bartolomeu",
    "Ceasar",
    "Dexter",
    "Eliezer",
    "Fernandinho",
    "Gonçalves",
    "Heriberto",
    "Ítalo",
    "Jânio",
    "Kakyoin",
    "Laércio",
    "Matheus",
]

function createTableItems() {

    cursoEdificacoes.forEach(item => {
    
        let name = `
            <tr>
                <td><a class="text-decoration-none text-dark" data-bs-toggle="modal" href="#ModalToggle" role="button" onclick="modalData(this), showInfo()">${item}</a></td>
            </tr>
        `
        
        let listName = document.getElementById("edificacoesList")
        listName.innerHTML += name
    
    })

    cursoBeleza.forEach(item => {
    
        let name = `
            <tr>
                <td><a class="text-decoration-none text-dark" data-bs-toggle="modal" href="#ModalToggle" role="button" onclick="modalData(this), showInfo()">${item}</a></td>
            </tr>
        `
        let listName = document.getElementById("belezaList")
        listName.innerHTML += name
    
    })

    cursoGastronomia.forEach(item => {
    
        let name = `
            <tr>
                <td><a class="text-decoration-none text-dark" data-bs-toggle="modal" href="#ModalToggle" role="button" onclick="modalData(this), showInfo()">${item}</a></td>
            </tr>
        `
        let listName = document.getElementById("gastronomiaList")
        listName.innerHTML += name
    
    })

    cursoTecnologia.forEach(item => {
    
        let name = `
            <tr>
                <td><a class="text-decoration-none text-dark" data-bs-toggle="modal" href="#ModalToggle" role="button" onclick="modalData(this), showInfo()">${item}</a></td>
            </tr>
        `
        let listName = document.getElementById("tecnologiaList")
        listName.innerHTML += name
    
    })
}

function modalInfoName() {
    let name = document.getElementById("ModalToggleLabel").textContent
    let inputName = document.getElementById("inputName")

    inputName.value = name
}

createTableItems()

function modalData(element) {
    let name = element.textContent
    document.getElementById("ModalToggleLabel").innerHTML = name
}
