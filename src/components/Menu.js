import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Menu extends Component {

    constructor(props){
		super(props)
		this.state = {
            button:["bg-light text-dark","bg-secondary text-white rounded"],
            textButton:["#1972F7", "white"],
            selected: 0
		}
    }
    
    selectMenu(button){
        this.setState({selected:button});
    }

	render() {
		return (
			<ul className="nav flex-column border rounded bg-dark">
                
                <p className="text text-center m-auto p-2 text-white"><strong>Traduções</strong></p>
                
                <li className={`nav-item small border ${this.state.button[(this.state.selected === 0 ?1:0)]}`} onClick={()=>this.selectMenu(0)}>
                    <Link to="/" style={{color:`${this.state.textButton[(this.state.selected === 0 ?1:0)]}`}}> <p className="text text-center p-2 m-auto">Início</p></Link>
                </li>
                <li className={`nav-item small border ${this.state.button[(this.state.selected === 1 ?1:0)]}`} onClick={()=>this.selectMenu(1)}>
                    <Link to="/Playstation" style={{color:`${this.state.textButton[(this.state.selected === 1 ?1:0)]}`}}><p className="text text-center p-2 m-auto">Playstation</p></Link>
                </li>
                <li className={`nav-item small border ${this.state.button[(this.state.selected === 2 ?1:0)]}`} onClick={()=>this.selectMenu(2)}>
                    <Link to="/Playstation 2" style={{color:`${this.state.textButton[(this.state.selected === 2 ?1:0)]}`}}> <p className="text text-center p-2 m-auto">Playstation 2</p></Link>
                </li>
                <li className={`nav-item small border ${this.state.button[(this.state.selected === 3 ?1:0)]}`} onClick={()=>this.selectMenu(3)}>
                    <Link to="/Playstation 3" style={{color:`${this.state.textButton[(this.state.selected === 3 ?1:0)]}`}}> <p className="text text-center p-2 m-auto">Playstation 3</p></Link>
                </li>
                <li className={`nav-item small border ${this.state.button[(this.state.selected === 4 ?1:0)]}`} onClick={()=>this.selectMenu(4)}>
                    <Link to="/Game Cube" style={{color:`${this.state.textButton[(this.state.selected === 4 ?1:0)]}`}}> <p className="text text-center p-2 m-auto">Game Cube</p></Link>
                </li>
                <li className={`nav-item small border ${this.state.button[(this.state.selected === 5 ?1:0)]}`} onClick={()=>this.selectMenu(5)}>
                    <Link to="/Wii" style={{color:`${this.state.textButton[(this.state.selected === 5 ?1:0)]}`}}> <p className="text text-center p-2 m-auto">Wii</p></Link>
                </li>
                <li className={`nav-item small border ${this.state.button[(this.state.selected === 6 ?1:0)]}`} onClick={()=>this.selectMenu(6)}>
                    <Link to="/Xbox 360" style={{color:`${this.state.textButton[(this.state.selected === 6 ?1:0)]}`}}> <p className="text text-center p-2 m-auto">Xbox 360</p></Link>
                </li>
                <p className="text text-center p-2 m-auto text-white"><strong>Projetos</strong></p>

                <li className={`nav-item small border ${this.state.button[(this.state.selected === 7 ?1:0)]}`} onClick={()=>this.selectMenu(7)}>
                    <Link to="/Grupos" style={{color:`${this.state.textButton[(this.state.selected === 7 ?1:0)]}`}}> <p className="text text-center p-2 m-auto">Grupos</p></Link>
                </li>
                <li className={`nav-item small border ${this.state.button[(this.state.selected === 8 ?1:0)]}`} onClick={()=>this.selectMenu(8)}>
                    <Link to="/Andamento" style={{color:`${this.state.textButton[(this.state.selected === 8 ?1:0)]}`}}> <p className="text text-center p-2 m-auto">Andamento</p></Link>
                </li>
            </ul>
		);
	}
}

export default Menu;