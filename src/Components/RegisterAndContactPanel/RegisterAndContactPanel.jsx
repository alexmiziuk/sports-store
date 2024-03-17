import React from 'react';
import Container from '../Container/Container';
import './registerAndContactPanel.scss';

const RegisterAndContactPanel = () => {
	return (
		<div className='register-panel'>
			<Container>
				<div className='register-panel__wrapper'>
					<div className="contacts">
						<a href="tel:+380989000909" className="contacts__number-phone">098 900 09 09</a>
						<button className="contacts__help">Допомога</button>
					</div>
					<div className="account">
						<button className="account__input">Увійти</button>
						<span className='account__slash'>/</span>
						<button className="account__register">Заеєреструватися</button>
					</div>
				</div>

			</Container>


		</div>
	);
};

export default RegisterAndContactPanel;