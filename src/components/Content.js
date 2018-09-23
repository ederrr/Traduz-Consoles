import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Home';
import ListTranslate from './ListTranslate';
import Game from './Game';

class Content extends Component{

	render(){
		return(
			<div className="p-0 m-0">
			<Switch>
				<Route exact path='/' component = {Home} />
				<Route path='/Playstation' render = {(props) => <ListTranslate {...props} console="Playstation"/>}  /> 
				<Route path='/Playstation 2' render = {(props) => <ListTranslate {...props} console="Playstation 2"/>}  /> 
				<Route path='/Playstation 3' render = {(props) => <ListTranslate {...props} console="Playstation 3"/>}  />
				<Route path='/Game Cube' render = {(props) => <ListTranslate {...props} console="Game Cube"/>}  /> 
				<Route path='/Wii' render = {(props) => <ListTranslate {...props} console="wii"/>}  /> 
				<Route path='/Xbox 360' render = {(props) => <ListTranslate {...props} console="Xbox 360"/>}  /> 
				<Route exact path='/Game:id'  render = {(props) => <Game {...props} />} />

			</Switch>
			</div>
		);
	}
}

export default Content;