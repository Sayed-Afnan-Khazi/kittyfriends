import React from 'react';

const SearchBox = ({searchChangeFunction}) => {
	return (
		<input type="search" placeholder="Search Kittyfriends"
		className='pa3 ba b--lightest-blue bg-lightest-yellow' 
		onChange={searchChangeFunction}/>
	)
}

export default SearchBox;