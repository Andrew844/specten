import React from "react";

import "../css/contacts.css";

export default function Contacts () {
	return (
		<div className="contacts-page" id="contacts-page">
			<div className="description">
				<p>
				ООО "МиассСпецТэн"
				<br/>
				Телефоны:
				<span> 8 908 82603 01, (3513) 59-17-67</span>
				<br/>
				456318 Челябинская обл., г. Миасс
				<br/>
				e-mail:<span> spetsten@yandex.ru</span>
				</p>
			</div>
			<div className="submit-form">
				<h5>Вы можете связаться с нами через форму:</h5>
				<div className="input-field">
					<input id="email" type="email" className="validate"/>
					<label htmlFor="email">Введите ваш email</label>
				</div>
				<div className="input-field">
					<input id="phone" type="email" className="validate"/>
					<label htmlFor="phone">Введите ваш телефон</label>
				</div>
				<div className="input-field">
					<textarea id="question" className="materialize-textarea"></textarea>
					<label htmlFor="question">Введите ваш вопрос</label>
				</div>
				<p className="submit-btn waves-effect btn-large">Отправить</p>
			</div>
		</div>
	);
};