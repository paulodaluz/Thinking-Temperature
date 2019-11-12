import React, { Component } from 'react';
import firebase from 'firebase';

// Importando CSS
import './Home.css';

// Import Componentes


export default class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            qntPessoas: 0,
            temperatura: 0,
            automaticModeAir: false,
            offAirConditioning: false,
            onAirConditioning: false,
        }
        this.getTemperature()
        this.getQntPeople()
    }

    getQntPeople() {
        return new Promise((resolve, reject) => {
            firebase.database().ref(`/qntPessoas`)
                .on('value', snapchot => {
                    let qntPessoas = snapchot.val()
                    this.setState({ qntPessoas })
                })
        })
    }

    getTemperature() {
        return new Promise((resolve, reject) => {
            firebase.database().ref(`/temperatura`)
                .on('value', snapchot => {
                    let temperatura = snapchot.val()
                    this.setState({ temperatura })
                })
        })
    }

    mockTemperatura(temperatura){
        firebase
        .database()
            .ref(`/temperatura`)
            .set(temperatura)
    }
    
    mockPessoas(pessoas) {
        firebase
            .database()
            .ref(`/qntPessoas`)
            .set(pessoas)
    }

    automaticModeAirConditioning(){
        this.setState.automaticModeAir = true;
        this.setState.onAirConditioning = false;
        this.setState.offAirConditioning = false;
        console.log('Modo automático ativado!')
        /* this.mockTemperatura(this.state.temperatura)
        this.mockPessoas(this.state.qntPessoas) */
    }

    offAirConditioning(){
        this.setState.automaticModeAir = false;
        this.setState.onAirConditioning = false;
        this.setState.offAirConditioning = true;
        console.log('Ar condicionado desligado!')
    }

    onAirConditioning() {
        this.setState.automaticModeAir = false;
        this.setState.offAirConditioning = false;
        this.setState.onAirConditioning = true;
        console.log('Ar condicionado ligado!')
    }
      
    render() {
        return (
            <div className="imagem-background-home padding-principal">
                <div className="painel">
                    <h3 className="title-inside-table">Temperatura</h3>
                    <h1 className="numero-de-pessoas">{this.state.temperatura}°C</h1>
                    <h3 className="title-inside-table">
                        Quantidade de pessoas dentro da sala
                        </h3>
                    <h1 className="numero-de-pessoas">{this.state.qntPessoas}</h1>
                </div>
                <div className="div-botoes">
                    
                    <button className="botao" onClick={
                        () => this.automaticModeAirConditioning()}
                        >Ativar Modo Automático</button>

                    <button className="botao" onClick={
                        () => this.offAirConditioning()}
                        >Desligar Ar Condicionado</button>

                    <button className="botao" onClick={
                        () => this.onAirConditioning()}
                        >Ligar Ar Condicionado</button>
                </div>
            </div>
        )
    }
}
