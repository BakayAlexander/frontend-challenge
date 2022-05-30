import React, { useState } from 'react';
import Card from '../Card/Card';
import Preloader from '../Preloader/Preloader';
import './CatsList.css';

function CatsList({ cards, onLikeCard, onDislikeCard, likedCards, isLoading }) {
	const [cardsNumber, setCardsNumber] = useState(10);
	const handleAddMoreCards = () => {
		setCardsNumber(cardsNumber + 5);
	};
	return (
		<>
			{isLoading ? (
				<Preloader />
			) : (
				<>
					<ul className='cats-list'>
						{cards.slice(0, cardsNumber).map((card) => (
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
					<div className='cats-list__container'>
						<button
							className='cats-list_add-button'
							type='button'
							aria-label='Загрузить больше фильмов'
							onClick={handleAddMoreCards}
						>
							Ещё
						</button>
					</div>
				</>
			)}
		</>
	);
}

export default CatsList;
