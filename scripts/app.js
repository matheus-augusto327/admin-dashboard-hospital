const firebaseConfig = {
    apiKey: "AIzaSyDVFgZhy3TNxOtL668dfTmvbZZMKTJvN_4",
    authDomain: "enfermaria-pm.firebaseapp.com",
    projectId: "enfermaria-pm",
    storageBucket: "enfermaria-pm.appspot.com",
    messagingSenderId: "539726003901",
    appId: "1:539726003901:web:61e4d652088759f34241d4"
  };

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()

const ATENDIMENTOS = "atendimentos"

db.collection(ATENDIMENTOS).where("nome", "==", "Alian de Oliveira").get().then(snapshot => {
    snapshot.forEach(doc => {
        let atendimentos = doc.data()
        let nome = atendimentos.nome
        let dia = atendimentos.dia
        let hora = atendimentos.hora
        let sintoma = atendimentos.sintoma
        let medicamento = atendimentos.medicamento
        let obs = atendimentos.obs

        console.log(atendimentos)
        
    })
})