import React, { Component } from 'react';
import TranslateItem from './TranslateItem';
import {buscaGamePlataforma} from './services/acess.api'

class Content extends Component{

    constructor(props){
		super(props)
		this.state = {
            console: "",
            games:[]
		}
    }

    componentDidMount(props){
        buscaGamePlataforma(this.props.console).then(game => this.setState({console: this.props.console, games:game.data})) 
    }

    componentWillReceiveProps(props){
        buscaGamePlataforma(props.console).then(game => this.setState({console: props.console, games:game.data})) 
    }

	render(){
		return(
			<div className="row p-0 m-0">
            <p className="col col-12 h4 mb-5 my-3">Traduções {this.state.console}</p>
			<div className="col col-8">
                <ul className="list">
                {this.state.games.map((game) => (
                    <TranslateItem key={game.id} game={game}/>
                ))}
                </ul>
            </div>
            <div className="col col-4">
                {/*<img className="img-fluid" src={require(`../assets/consoles/${this.state.console}.jpg`)} alt={this.state.console}/>*/}
            </div>
			</div>
		);
	}
}

export default Content;