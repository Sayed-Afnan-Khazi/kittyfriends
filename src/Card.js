import React from 'react';

const Card = ({ id, name, email }) => {
	return (
		<div className="tc bg-light-yellow dib pa3 br3 ma2 grow bw3 shadow-3">
			<img src={`https://robohash.org/${id}?size=100x100&set=set4`} alt="Kitty"/>
			<p className='b'> { name } </p>
			<p> { email } </p>
		</div>
	)
}

export default Card;