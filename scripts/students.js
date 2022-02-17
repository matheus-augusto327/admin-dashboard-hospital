let cursoEdificacoes = [
    "Ana Carolina de Oliveira Leal",
    "Anael Estevão Alberto",
    "Angela Emanuelle Lindo Francisco",
    "Barbara Rafaella Bello Ferreira",
    "Brenda Vítoria Maciel Dos Santos",
    "Breno Rodrigues da Silva",
    "Daiana Almeida Guimarães",
    "Erick do Nascimento de Moura Prata",
    "Euler Costa De Oliveira",
    "Gabriel Henrique da Silva",
    "Giovana Martins Barbosa",
    "Gleice Kelly Santana Reis",
    "Iam Giovani Barbosa",
    "Jean Carlos de Oliveira",
    "Jennifer Santos",
    "Jhonata Oliveira Araujo",
    "Kathilyn Cristine Mascarenhas de Camargo",
    "Kauã Miguel Alexandre Silva",
    "Maria Jeovania Lopes da Silva",
    "Pedro Henrique Cardoso da Costa",
    "Renan Gabriel Palumbo Antônio",
    "Thiago Augusto Cruz Pereira",
    "Victor Carinio de Barros"
]

let cursoBeleza = [
    "Alian de Oliveira",
    "Ariane de Carvalho da Silva",
    "Aynoa Oliveira PImenta",
    "Bianca Luane das Neves de Moraes",
    "Camile da Silva Paczkowski",
    "Daniela de Oliveira Rodrigues",
    "Eduarda Vítoria dos Santos",
    "Geniffer Hemily Freitas Santos",
    "Giovana Rafaele Nascimento da Silva",
    "Gustavo Ferreira de Camargo",
    "Ingrid Lacerda Rozzanti",
    "Isabela Vítoria de Moura ",
    "Joana Ewely Alves Pereira da Silva",
    "Jussara Alves Neres ",
    "Kathlyn Victoria lima de Souza",
    "Kauany Cristine de Paula Santana",
    "Ketley Morais de Castro",
    "Laisla Raphaela Victória Lopes",
    "Laissa Aparecida de Sá Ferreira",
    "Livya Alves Neves",
    "Ludmylla Barbosa Donadio",
    "Maria Alice Pannunzio Cypriano de Souza",
    "Maria Eduarda Lopes Cordeiro da Silva",
    "Pedro Henrique Verza Gonçalves",
    "Rayane Caroline Palumbo Antônio",
    "Samira Késia Couto da Silva",
    "Sara de Oliveira Rodrigues da Silva",
    "Sthefani Vitoria Pereira da Silva",
    "Suelen de Oliveira Soares Coelho",
    "Thais da Silva Santos",
    "Vitória Caroline Piro de LIma"
]

let cursoGastronomia = [
    "Adrian Henrique de Souza",
    "Bruno Alcantara",
    "Caio Eduardo Ramalho Gatti",
    "Camila Silva de Moraes",
    "Gabriele Leme da Silva",
    "Jamilly Carvalho Santana",
    "Jaqueline Escuer Beltrame",
    "João Felipe Godoy Acedo",
    "João Gabriel Lopes dos Santos",
    "João Pedro de Oliveira Gomes",
    "Júlia Oliveira Geraldo",
    "Juliana Mello da Rocha",
    "Leonardo Augusto Almeida Pires Silva",
    "Lidiane Alves Rodrigues",
    "Lucilda da Silva Santos",
    "Maicon Douglas Bovenzo dos Santos",
    "Mirella Vasconcelos de Lima",
    "Nathalia Gabrielle Roberto de Paulo",
    "Nelson Valdemar da Silva Junior",
    "Ryan Daniel Santos Amaral",
    "Yara Aparecida da Silva"
]

let cursoTecnologia = [
    "Aline Campos Julião",
    "Alison Felipe de Jesus da Silva",
    "André Eduardo de Souza Avelino",
    "Anthony Gabriel Santos da Silva",
    "Arthur Felipe de Araujo Ferreira",
    "Augusto Cordeiro dos Santos",
    "Bruno Antonio Crisostomo Ferreira",
    "Caique Emanuel Alves de Faria",
    "Cauã Aparecido de Lima França",
    "Denis dos Santos Queiroz",
    "Deryck Reis de Oliveira ",
    "Eduardo de Moraes Souza",
    "Erick Ramalho de Souza",
    "Fernanda Beatriz Torres",
    "Gabriel Henrique da Souza",
    "Giovanna Correa Ramos Lima",
    "Gustavo Silva Souza",
    "Jénifer Nicole de Paula Silva",
    "João Vitor Mendes Mota",
    "Julia Gabrielle Siqueira",
    "Kaio Adriano Vidigal Mariano",
    "Kauã Albuquerque Lima",
    "Larissa Pires Galvão",
    "Laura Ferreira Antonioli",
    "Leandro Melo Silva",
    "Livia Raquel Gomes Paes Landim",
    "Luis Claudio da Silva Cavallaro",
    "Marcelo Gabriel Silveira Meira",
    "Marcio dos Santos Chaves",
    "Maria Eduarda Barbosa de Souza",
    "Maria Eduarda Fernandes",
    "Mariana Marques Ortega",
    "Mariana Mendes Araújo de Lima",
    "Matheus Augusto de Souza",
    "Michael Augusto das Neves Tanabe",
    "Miguel Pellicciaro Alessandri",
    "Naily Taissa Mendes Pereira",
    "Natiele Quadros da Silva",
    "Nichollas Andrey Rodrigues da Silva",
    "Nickolas de Carvalho Galli",
    "Nicolas Carbajo de Andrade",
    "Pedro Henrique Althman Caetano",
    "Pedro Henrique Silva de Lima",
    "Rafael Brandão Silva",
    "Ryan Tediola",
    "Sophia Whitney Santos da Conceição",
    "Thainá Tamires de Oliveira Pinto",
    "Valeska Antonia Ferreira de Barros",
    "Vinicius Augusto Capodeferro Leão"
]

function modalData(element) {
    let name = element.textContent
    document.getElementById("ModalToggleLabel").innerHTML = name
}

function createTableItems() {

    cursoEdificacoes.forEach(item => {
    
        let name = `
            <tr>
                <td><a class="text-decoration-none text-dark" data-bs-toggle="modal" href="#ModalToggle" role="button" onclick="modalData(this)">${item}</a></td>
            </tr>
        `
        
        let listName = document.getElementById("edificacoesList")
        listName.innerHTML += name
    
    })

    cursoBeleza.forEach(item => {
    
        let name = `
            <tr>
                <td><a class="text-decoration-none text-dark" data-bs-toggle="modal" href="#ModalToggle" role="button" onclick="modalData(this)">${item}</a></td>
            </tr>
        `
        let listName = document.getElementById("belezaList")
        listName.innerHTML += name
    
    })

    cursoGastronomia.forEach(item => {
    
        let name = `
            <tr>
                <td><a class="text-decoration-none text-dark" data-bs-toggle="modal" href="#ModalToggle" role="button">${item}</a></td>
            </tr>
        `
        let listName = document.getElementById("gastronomiaList")
        listName.innerHTML += name
    
    })

    cursoTecnologia.forEach(item => {
    
        let name = `
            <tr>
                <td><a class="text-decoration-none text-dark" data-bs-toggle="modal" href="#ModalToggle" role="button">${item}</a></td>
            </tr>
        `
        let listName = document.getElementById("tecnologiaList")
        listName.innerHTML += name
    
    })
}

createTableItems()