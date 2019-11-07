import firebase from 'firebase'

  var firebaseConfig = {
    apiKey: "AIzaSyBaTlxXD-D6fuovMMfFfEmYVvi5ECG3tFs",
    authDomain: "thinking-temperature.firebaseapp.com",
    databaseURL: "https://thinking-temperature.firebaseio.com",
    projectId: "thinking-temperature",
    storageBucket: "thinking-temperature.appspot.com",
    messagingSenderId: "793103532455",
    appId: "1:793103532455:web:2962e632b25816e865f682",
    measurementId: "G-N4GLTXMTK5"
  };

firebase.initializeApp(firebaseConfig);

export const isAuthenticated = () => sessionStorage.getItem("UID") !== null

export const login = (email, password) => {
    return new Promise((resolve, reject) => {
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then((usuario) => {
                sessionStorage.setItem("UID", usuario.user.uid)
                resolve()
            })
            .catch((erro) => {
                reject(erro)
            })
    })
}

export const logoff = () => {
    return new Promise((resolve, reject) => {
        sessionStorage.removeItem("UID")
        resolve()
    })
}