import React from 'react';
import Container from '../Container/Container';
import './nav.scss';

import searchIcon from '../../Resource/icons/search.png'


const Nav = () => {
	return (
		<div className='nav'>
			<Container>
				<div className="nav__wrapper">
					<a href="#" className="nav__logo">Ignat</a>
					<ul className="nav__list">
						<li className="nav__list-item">новинки</li>
						<li className="nav__list-item">чоловіки</li>
						<li className="nav__list-item">жінки</li>
						<li className="nav__list-item">аксесуари</li>
						<li className="nav__list-item">акції</li>
					</ul>
					<div className="nav__search">
						<div className="nav__search-wrapper">
							<img src={searchIcon} alt="search icon" className="nav__search-icon" />
							<input type="text" className="nav__search-input" />
						</div>
						<button className="nav__search-heart"></button>
						<button className="nav__search-bag"></button>
					</div>
				</div>

			</Container>
		</div>
	);
};

export default Nav;