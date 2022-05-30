import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

function Header() {
	return (
		<header className='header'>
			<nav className='header__link-container'>
				<NavLink to='/' className={(navData) => (navData.isActive ? 'header__link_active' : 'header__link')}>
					Все котики
				</NavLink>
				<NavLink to='/liked' className={(navData) => (navData.isActive ? 'header__link_active' : 'header__link')}>
					Любимые котики
				</NavLink>
			</nav>
		</header>
	);
}

export default Header;
