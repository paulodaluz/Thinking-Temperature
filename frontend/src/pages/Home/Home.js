import React, { Component } from 'react';

// Importando CSS
import './Home.css';

// Import Componentes


export default class Home extends Component {
    constructor(){
        super()
        this.state = {
            pessoas: 17
        }
    }

    automaticModeAirConditioning(){
        console.log('Modo Automático ativado')
    }

    offAirConditioning(){
        console.log('Modo Automático ativado')
    }

    onAirConditioning() {
        console.log('Modo Automático ativado')
    }

    render() {
        return (
            <div className="imagem-background-home padding-principal">
                <div className="painel">
                    <h3 className="title-inside-table">Temperatura</h3>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <h3 className="title-inside-table">Quantidade de pessoas dentro da sala</h3>
                    <h1 className="numero-de-pessoas">{this.state.pessoas}</h1>
                </div>
                <div className="div-botoes">
                    <button className="botao" onClick={() => this.automaticModeAirConditioning()}>Ativar Modo Automático</button>
                    <button className="botao" onClick={() => this.offAirConditioning()}>Desligar Ar Condicionado</button>
                    <button className="botao" onClick={() => this.onAirConditioning()}>Ligar Ar Condicionado</button>
                </div>
            </div>
        )
    }
}
