import React from 'react';

const Featured = (props) => {
	return(
		<img className="img-fluid" alt ={props.image} src={require(`../assets/lancamentos/${props.image}`)}></img>
	);
}

export default Featured;