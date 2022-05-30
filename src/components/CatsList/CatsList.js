import React from 'react';
import Card from '../Card/Card';
import './CatsList.css';

function CatsList({ cards }) {
	return (
		<ul className='cats-list'>
			{cards.map((card) => (
				<Card key={card.id} image={card.url} id={card.id} />
			))}
		</ul>
	);
}

export default CatsList;
