import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../Card/Card';
import './CatsLikedList.css';

function CatsLikedList({ cards, onLikeCard, onDislikeCard }) {
	return (
		<>
			{cards.length !== 0 ? (
				<ul className='cats-liked-list'>
					{cards.map((card) => (
						<Card
							key={card.id}
							url={card.url}
							id={card.id}
							isLiked={true}
							onLikeCard={onLikeCard}
							onDislikeCard={onDislikeCard}
						/>
					))}
				</ul>
			) : (
				<div className='cats-liked-list__empty-container'>
					<h2 className='cats-liked-list__empty-title'>Все котики разбежались =(</h2>
					<Link to='/' className='cats-liked-list__link'>
						Скорее, давайте найдем их!
					</Link>
				</div>
			)}
		</>
	);
}

export default CatsLikedList;
