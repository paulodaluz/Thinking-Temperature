import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { BarLoader } from 'react-spinners';
import { login } from '../../services/auth';

//Import CSS
import '../../App.css';
import './Login.css';

const override = `
    display: block;
    margin: 19px auto;
    border-color: red;
    width: 154px;
`;

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            errorMessage: '',
            loading: false         
        };
    }
    logar = async() => {
        this.setState({ loading: true })
        await login(this.state.email, this.state.password)
            .then(() => this.props.history.push("/"))
            .catch(erro => this.setState({ errorMessage: erro.message }), this.setState({ loading: false }))
    }

    render() {
        return (
            <div className="padding-login imagem-background-login">
                <div className="painel">
                    <h1 className="centraliza-titulo">Login</h1>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Endereço de email</Form.Label>
                                <Form.Control type="email" placeholder="Digite seu email" 
                                    onInput={(e) => 
                                        this.setState({ email: e.target.value })}
                                />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Senha</Form.Label>
                                <Form.Control type="password" placeholder="Digite sua senha"
                                    onInput={(e) => 
                                        this.setState({ password: e.target.value })}
                                />
                        </Form.Group>

                        <Button variant="dark" className="button-logar" 
                            onClick={() => this.logar()} 
                        >Logar</Button>
                        <h4 className="errorMessage" >{this.state.errorMessage}</h4>
                        <BarLoader
                            css={override}
                            sizeUnit={"px"}
                            size={150}
                            color={'#123abc'}
                            loading={this.state.loading}
                        />

                        <div className="criar-cadastro">
                            <Link to="/cadastro">Voce ainda não possui uma conta?</Link>
                        </div>
                    </Form>
                </div>
            </div>
        )
    }
}