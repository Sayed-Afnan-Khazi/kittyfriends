import React from 'react';

const Scroll = (props) => {
	return (
		<div style={{overflowY:'scroll',height:'75vh'}}
			className="ba b--lightest-blue">
			{ props.children }
		</div>
	)
}

export default Scroll;