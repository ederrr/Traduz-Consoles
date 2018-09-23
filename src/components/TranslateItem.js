import React from 'react';
import {Link} from 'react-router-dom';

const TranslateItem = (props) => {
	return(
		<Link className="list-group-item border-white p-0" to={`/Game${props.game.id}`}><p className="m-0 p-0" style={{color:'black'}}><strong>{props.game.titulo} </strong>{props.game.subtitulo}</p></Link>
	);
}

export default TranslateItem;