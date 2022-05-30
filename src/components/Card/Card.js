import React from 'react';
import './Card.css';

function Card({ url, id, isLiked, onLikeCard, onDislikeCard }) {
	const showLikeButton = (e) => {
		const card = e.currentTarget;
		card.classList.add('card_active');
		if (isLiked) {
			const button = card.querySelector('.card__like-button_liked');
			button.classList.add('card__like-button_liked_active');
		} else {
			const button = card.querySelector('.card__like-button');
			button.classList.add('card__like-button_active');
		}
	};

	const hideLikeButton = (e) => {
		const card = e.currentTarget;
		card.classList.remove('card_active');
		if (isLiked) {
			const button = card.querySelector('.card__like-button_liked');
			button.classList.remove('card__like-button_liked_active');
		} else {
			const button = card.querySelector('.card__like-button');
			button.classList.remove('card__like-button_active');
		}
	};

	const handleClickLikeButton = (e) => {
		if (!isLiked) {
			onLikeCard(id, url);
		} else {
			onDislikeCard(id);
		}
	};

	return (
		<li className='card' onMouseOver={showLikeButton} onMouseLeave={hideLikeButton}>
			<img className='card__image' src={url} alt='Cat pic' />
			<button
				className={isLiked ? 'card__like-button_liked' : 'card__like-button'}
				type='button'
				onClick={handleClickLikeButton}
			></button>
		</li>
	);
}

export default Card;
