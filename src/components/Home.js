import React, { Component } from 'react';
import Featured from './Featured'


class Home extends Component{

	render(){
		return(
			<div className="p-0 m-0">
			<p>Sejam bem vindos ao novo Traduz Consoles!!!</p>
			<div className="col col-7 my-1 m-0"><Featured image="chrono.png"/></div>
			<div className="col col-7 my-1 m-0"><Featured image="kh-chain.png"/></div>
			<div className="col col-7 my-1 m-0"><Featured image="re-outbreak.png"/></div>
			<div className="col col-7 my-1 m-0"><Featured image="xenosaga.png"/></div>
			</div>
		);
	}
}

export default Home;