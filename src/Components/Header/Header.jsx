import React from 'react';

import RegisterAndContactPanel from '../RegisterAndContactPanel/RegisterAndContactPanel';
import Nav from '../Navigaion/Nav';
import './header.scss';

const Header = () => {
	return (
		<div className='header'>
			<RegisterAndContactPanel />
			<Nav/>

		</div>
	);
};

export default Header;