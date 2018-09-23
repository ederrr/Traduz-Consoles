import React, { Component } from 'react';

class MiniImage extends Component{

	render(){
		return(
			<div className=" col col-4 py-1">
            <img className="img-fluid" src={require(`../assets/lancamentos/re-outbreak.png`)} alt=""/>
			</div>
		);
	}
}

export default MiniImage;