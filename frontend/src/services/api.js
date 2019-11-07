import firebase from 'firebase';

export const getQntPeople = () => {    
    return new Promise((resolve, reject) => {
    firebase.database().ref(`/qntPessoas`)
        .on('value', snapchot => {
            let qntPessoas = snapchot.val()
            resolve(qntPessoas)
        })
    })
}

export const getTemperature = () => {    
    return new Promise((resolve, reject) => {
        firebase.database().ref(`/temperatura`)
            .on('value', snapchot => {
                let temperatura = snapchot.val()
                resolve(temperatura)
            })
    })
}