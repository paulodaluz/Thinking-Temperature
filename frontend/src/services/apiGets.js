import axios from "axios";

let api = "";

export const automaticModeAirConditioning = () => {
    return new Promise((resolve, reject) => {
        axios.get(`${api}/people/`)
            .then(dados => {
                // setTimeout(function () { resolve(dados.data.results) }, 99999000)
                resolve(dados.data.results)
            })
            .catch(erro => {
                reject(erro)
            })
    });
}
export const offAirConditioning = () => {
    return new Promise((resolve, reject) => {
        axios.get(`${api}`)
            .then(dados => {
                resolve(dados.data.results)
            })
            .catch(erro => {
                reject(erro)
            })
    });
}
export const onAirConditioning = () => {
    return new Promise((resolve, reject) => {
        axios.get(`${api}`)
            .then(dados => {
                resolve(dados.data.results)
            })
            .catch(erro => {
                reject(erro)
            })
    });
}
export const getSpecies = () => {
    return new Promise((resolve, reject) => {
        axios.get(`${api}`)
            .then(dados => {
                resolve(dados.data.results)
            })
            .catch(erro => {
                reject(erro)
            })
    });
}

export const getStarships = () => {
    return new Promise((resolve, reject) => {
        axios.get(`${api}`)
            .then(dados => {
                resolve(dados.data.results)
            })
            .catch(erro => {
                reject(erro)
            })
    });
}