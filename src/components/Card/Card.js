import React from 'react';
import './Card.css';

function Card({ url, id, isLiked, onLikeCard, onDislikeCard }) {
	const showLikeButton = (e) => {
		const card = e.currentTarget;
		card.classList.add('card_active');
		const button = card.querySelector('.card__like-button');
		if (isLiked) {
			button.classList.add('card__like-button_liked-active');
		}
		button.classList.add('card__like-button_active');
	};

	const hideLikeButton = (e) => {
		const card = e.currentTarget;
		card.classList.remove('card_active');
		const button = card.querySelector('.card__like-button');
		if (isLiked) {
			button.classList.remove('card__like-button_liked-active');
		}
		button.classList.remove('card__like-button_active');
	};

	const handleClickLikeButton = () => {
		if (!isLiked) {
			onLikeCard(id, url);
		} else {
			onDislikeCard(id);
		}
	};

	return (
		<li className='card' onMouseOver={showLikeButton} onMouseLeave={hideLikeButton}>
			<img className='card__image' src={url} alt='Cat pic' />
			<button className={'card__like-button'} type='button' onClick={handleClickLikeButton}></button>
		</li>
	);
}

export default Card;
