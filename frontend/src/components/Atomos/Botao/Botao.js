import React, { Component } from 'react'

// Import CSS
import './Botao.css';

export default class Botao extends Component {
    render() {
        return (
            <div>
                <button className="botao" style={{backgroundColor: this.props.color}} onClick={this.props.onClick}>{this.props.mensagem}</button>
            </div>
        )
    }
}
