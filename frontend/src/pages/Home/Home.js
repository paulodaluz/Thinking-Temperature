import React, { Component } from 'react';

// Importando CSS
import './Home.css';

// Import Componentes


export default class Contronlador extends Component {
    render() {
        return (
            <div className="imagem-background-home">
                <div className="div-botoes">
                    <button className="botao">Ativar Modo Automático</button>
                    <button className="botao">Desligar Ar Condicionado</button>
                    <button className="botao">Ligar Ar Condicionado</button>
                </div>
            </div>
        )
    }
}
