import React from 'react';
import Card from '../Card/Card';
import './CatsList.css';

function CatsList({ cards, onLikeCard, onDislikeCard, likedCards }) {
	return (
		<ul className='cats-list'>
			{cards.map((card) => (
				<Card
					key={card.id}
					url={card.url}
					id={card.id}
					onLikeCard={onLikeCard}
					onDislikeCard={onDislikeCard}
					isLiked={likedCards.some((likedCard) => likedCard.id === card.id)}
				/>
			))}
		</ul>
	);
}

export default CatsList;
