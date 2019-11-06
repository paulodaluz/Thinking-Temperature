import React, { Component } from 'react';
import firebase from 'firebase';

// Importando CSS
import './Home.css';

// Import Componentes


export default class Home extends Component {
    constructor(){
        super()
        this.state = {
            pessoas: 17,
            temperatura: 27.5,
            automaticModeAir: false,
            offAirConditioning: false,
            onAirConditioning: false,
        }

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
          // Initialize Firebase
          /* firebase.initializeApp(firebaseConfig); */
    }

    automaticModeAirConditioning(){
        console.log('Modo Automático ativado')
    }

    offAirConditioning(){
        this.setState.automaticModeAir = false;
        this.setState.onAirConditioning = false;
        this.setState.offAirConditioning = true;
        console.log('Modo Automático ativado')
    }

    onAirConditioning() {
        this.setState.automaticModeAir = false;
        this.setState.offAirConditioning = false;
        this.setState.onAirConditioning = true;
        this.salvarDados();
        console.log('Modo Automático ativado')
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
                    <h1 className="numero-de-pessoas">{this.state.pessoas}</h1>
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
