import React from 'react';

const Card = ({ id, name, email }) => {
	return (
		<div className="tc bg-light-yellow dib pa3 br3 ma2 grow bw3 shadow-3">
			<img src={`https://robohash.org/${id}?size=125x125&set=set4`} alt="Kitty"/>
			<p className='b f3 lobster'> { name } </p>
			<p className='i'> { email } </p>
		</div>
	)
}

export default Card;