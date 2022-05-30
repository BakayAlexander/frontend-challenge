import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { getCats } from '../../utils/api';
import Header from '../Header/Header';
import NotFound from '../NotFound/NotFound';
import CatsList from '../CatsList/CatsList';
import CatsLikedList from '../CatsLikedList/CatsLikedList';

function App() {
	const [cards, setCards] = useState([]);
	const [likedCards, setLikedCards] = useState([]);
	let storageCards = JSON.parse(localStorage.getItem('liked-cards'));

	useEffect(() => {
		getCats(10).then((res) => setCards(res));
	}, []);

	useEffect(() => {
		setLikedCards(storageCards);
	}, []);

	const onLikeCard = (id, url) => {
		if (!storageCards) {
			storageCards = [];
		}
		storageCards.push({ id, url });
		localStorage.setItem('liked-cards', JSON.stringify(storageCards));
		setLikedCards(storageCards);
	};
	const onDislikeCard = (id) => {
		const filtredArray = storageCards.filter((likedCard) => likedCard.id !== id);
		localStorage.setItem('liked-cards', JSON.stringify(filtredArray));
		setLikedCards(filtredArray);
	};

	return (
		<>
			<Header />
			<Routes>
				<Route
					exact
					path='/'
					element={
						<CatsList cards={cards} likedCards={likedCards} onLikeCard={onLikeCard} onDislikeCard={onDislikeCard} />
					}
				/>
				<Route
					exact
					path='/liked'
					element={<CatsLikedList cards={likedCards} onLikeCard={onLikeCard} onDislikeCard={onDislikeCard} />}
				/>
				<Route exact path='*' element={<NotFound />} />
			</Routes>
		</>
	);
}

export default App;
