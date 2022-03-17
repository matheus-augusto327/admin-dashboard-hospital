const firebaseConfig = {
    apiKey: "AIzaSyBduL1AOCSRK-vidJcojEpPmitUF4KlkwQ",
    authDomain: "nursery-12b6f.firebaseapp.com",
    projectId: "nursery-12b6f",
    storageBucket: "nursery-12b6f.appspot.com",
    messagingSenderId: "334395643947",
    appId: "1:334395643947:web:a42dfb88ce0cd00443726e"
  };

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()

const ATENDIMENTOS = "atendimentos"

function createInfo() {
    let name = document.getElementById("ModalToggleLabel").textContent
    let inputDate = document.getElementById("inputDate").value
    let inputTime = document.getElementById("inputTime").value
    let inputSymptom = document.getElementById("inputSymptom").value
    let inputMed = document.getElementById("inputMed").value
    let inputObs = document.getElementById("inputObs").value

    db.collection(ATENDIMENTOS).add({
        nome: name,
        data: inputDate,
        hora: inputTime,
        sintoma: inputSymptom,
        medicamento: inputMed,
        obs: inputObs
    }).catch(err => {
        console.log(err)
    })

    document.getElementById("inputDate").value = ""
    document.getElementById("inputTime").value = ""
    document.getElementById("inputSymptom").value = ""
    document.getElementById("inputMed").value = ""
    document.getElementById("inputObs").value = ""
}

function showInfo() {

    let name = document.getElementById("ModalToggleLabel").textContent
    let modalItems = document.getElementById("modalItems")
    let modalList = ""

    db.collection(ATENDIMENTOS).where("nome", "==", name).get().then(snapshot => {
        snapshot.forEach(doc => {
            let aluno = doc.data()
            let listContent = `
                <tr>
                    <th>${aluno.data}</th>
                    <th>${aluno.hora}</th>
                    <th>${aluno.sintoma}</th>
                    <th>${aluno.medicamento}</th>
                    <th>${aluno.obs}</th>
                    <th class="text-center"><button class="btn" onclick="deleteInfo('${doc.id}'), showInfo('${doc.id}')"><img src="./assets/close.png" width="16px"></button></th>
                </tr>
            `

            modalList += listContent

        })
        modalItems.innerHTML = modalList
    })

}

function showCallsInfo() {
    let day = document.getElementById("inputDay").value
    let dayInfo = document.getElementById("dayInfo")
    let calls = ""
    let callsHeader = `
            <span><strong>Atendimentos do Dia: ${day}</strong></span>
            <button class="btn-close" data-bs-toggle="collapse" data-bs-target="#dayInfo"></button>
            <table id="tableDayInfo" class="mt-3 table table-bordered table-striped table-hover table-responsive">
                <thead>
                    <tr>
                        <th class="text-center">Nome</th>
                        <th class="text-center">Hora</th>
                        <th class="text-center">Sintoma</th>
                        <th class="text-center">Medicamento</th>
                        <th class="text-center">Obs.</th>
                        <th class="text-center">❌</th>
                    </tr>
                </thead>
                <tbody id="callsItems"></tbody>
            </table>
    `

    db.collection(ATENDIMENTOS).where("data", "==", day).get().then(snapshot => {
        snapshot.forEach(doc => {
            let aluno = doc.data()
            let callsContent = `
                <tr>
                    <th>${aluno.nome}</th>
                    <th>${aluno.hora}</th>
                    <th>${aluno.sintoma}</th>
                    <th>${aluno.medicamento}</th>
                    <th>${aluno.obs}</th>
                    <th class="text-center"><button class="btn" onclick="deleteInfo('${doc.id}'), showInfo()"><img src="./assets/close.png" width="16px"></button></th>
                </tr>
            `

            calls += callsContent

        })
        dayInfo.innerHTML = callsHeader
        callsItems.innerHTML = calls
    })
}

function deleteInfo(docId) {
    db.collection(ATENDIMENTOS).doc(docId).delete()
}
