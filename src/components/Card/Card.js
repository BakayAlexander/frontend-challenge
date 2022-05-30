import React from 'react';
import './Card.css';

function Card({ image, isLiked, id }) {
	const showLikeButton = (e) => {
		// if (!isSavedMovies) return;
		const card = e.currentTarget;
		card.classList.add('card_active');
		const button = card.querySelector('.card__like-button');
		button.classList.add('card__like-button_active');
	};

	const hideLikeButton = (e) => {
		const card = e.currentTarget;
		card.classList.remove('card_active');
		const button = card.querySelector('.card__like-button');
		button.classList.remove('card__like-button_active');
	};

	const handleClickLikeButton = () => {
		let likedCardsArray = JSON.parse(localStorage.getItem('liked-cards'));
		if (!likedCardsArray) {
			likedCardsArray = [];
		}
		likedCardsArray.push({ id, image });
		localStorage.setItem('liked-cards', JSON.stringify(likedCardsArray));
	};

	return (
		<li className='card' onMouseOver={showLikeButton} onMouseLeave={hideLikeButton}>
			<img className='card__image' src={image} alt='Cat pic' />
			<button className='card__like-button' type='button' onClick={handleClickLikeButton}></button>
		</li>
	);
}

export default Card;
