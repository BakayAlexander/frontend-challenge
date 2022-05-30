import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { getCats } from '../../utils/api';
import Header from '../Header/Header';
import NotFound from '../NotFound/NotFound';
import CatsList from '../CatsList/CatsList';

function App() {
	const [cards, setCards] = useState([]);
	const [likedCards, setLikedCards] = useState([]);

	useEffect(() => {
		getCats(10).then((res) => setCards(res));
		localStorage.getItem('liked-cards');
	}, []);

	return (
		<>
			<Header />
			<Routes>
				<Route exact path='/' element={<CatsList cards={cards} />} />
				<Route exact path='*' element={<NotFound />} />
			</Routes>
		</>
	);
}

export default App;
