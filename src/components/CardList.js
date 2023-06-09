import React from 'react';
import Card from './Card'

const CardList = ({ kitties }) => {
	return (
		<div>
			{
					kitties.map((kitty,i) => {
						return (
								<Card
								key={i}
								id={kitty.id}
								name={kitty.name}
								email={kitty.email}
								/>
						)
					}
				)
			}
		</div>
	)
}

export default CardList;