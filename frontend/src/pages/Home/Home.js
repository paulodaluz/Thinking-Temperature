import React, { Component } from 'react';

// Importando CSS
import './Home.css';
import { getQntPeople, getTemperature } from '../../services/api';

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
        this.atualizarDados()
    }

    atualizarDados() {
        getQntPeople()
            .then(qntPessoas => this.setState({ qntPessoas }))
            .catch(erro => console.log(erro))

        getTemperature()
            .then(temperatura => this.setState({ temperatura }))
            .catch(erro => console.log(erro))
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
