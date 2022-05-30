import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
	return (
		<header className='header'>
			<div className='header__link-container'>
				<Link to='/' className='header__link'>
					Все котики
				</Link>
				<Link to='/liked' className='header__link'>
					Любимые котики
				</Link>
			</div>
		</header>
	);
}

export default Header;
