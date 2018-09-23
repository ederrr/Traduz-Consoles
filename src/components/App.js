import React, { Component } from 'react';
import Menu from './Menu';
import Content from './Content';

//import logo from './logo.svg';
//import './App.css';

class App extends Component {
	render() {
		return (
			<div className="p-0 m-0">
			<div className="col col-12 bg-dark p-1"><span className="h3 text-info mr-5">TC</span><span className="h5 text-white">Traduz Consoles</span></div>
			<div className="col col-12 bg-info pt-1 shadow-sm mb-4"></div>
			<div className="container row bg-white col-10 offset-1 border shadow-sm rounded py-3">
				<div className="col col-3">
				<Menu/>
				</div>
				<div className="col col-9">
				<Content/>
				</div>
				
			</div>
			</div>
		);
	}
}

export default App;
