import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import MiniImage from './MiniImage';
import {buscaGameId} from './services/acess.api'


class Game extends Component {

    constructor(props){
		super(props)
		this.state = {
            titulo: "",
            subtitulo: "",
            plataforma:"Playstation",
            idioma:"Português do Brasil (PT-BR)",
            status: "100%",
            responsavel:"Eder RR",
            observacao:"",
            capa:"kh-chain.jpg"
		}
    }

    componentDidMount(){
		buscaGameId(this.props.match.params.id).then((res) => this.setState({
            titulo: res.data[0].titulo,
            subtitulo: res.data[0].subtitulo,
            plataforma: res.data[0].plataforma,
            responsavel: res.data[0].responsavel,
            capa: res.data[0].capa,
        }))
	}

	render() {
		return (
            <div>
			<div className="row pb-2 m-0">
            <div className="col col-8 "><p className="h4"><strong>{this.state.titulo}</strong><span className="h5"> {this.state.subtitulo}</span></p></div>
            </div>
            <div className="row p-0 m-0">
            <div className="col col-8 pt-5">
            
            <p><strong>Plataforma:</strong><span>{this.state.plataforma}</span></p>
            <p><strong>Idioma:</strong><span>{this.state.idioma}</span></p>

            <p><strong>Status:</strong><span>{this.state.status}</span></p>
            <p><strong>Responsável:</strong><span><Link to="/Grupo">{this.state.responsavel}</Link></span></p>

            <p><strong>Download da Tradução:</strong></p>

            <p><strong>Observações:</strong><span>{this.state.observacao}</span></p>
            
            </div>
            <div className="col col-4 p-0 m-0"><img className="img-fluid" src={require(`../assets/games/${this.state.capa}`)} alt=""/></div>
            </div>
            <div className="row py-5">
                <MiniImage />
                <MiniImage />
                <MiniImage />
                <MiniImage />
            </div>
            </div>
		);
	}
}

export default Game;