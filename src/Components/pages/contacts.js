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
			<div className="application-form">
				<h4>Вы можете связаться с нами через форму:</h4>
				<div  className="input-field">
					<input id="email" type="text" required="true" valid="true"/>
					<label htmlFor="email">
						<span className="content-name">Введите email</span>
					</label>
        </div>
				<div  className="input-field">
					<input id="phone" type="text" required="true" valid="true"/>
					<label htmlFor="phone">
						<span className="content-name">Введите номер телефона</span>
					</label>
        </div>
				<div  className="input-field">
					<input id="phone" type="text" required="true" valid="true"/>
					<label htmlFor="phone">
						<span className="content-name">Задайте ваш вопрос</span>
					</label>
        </div>
				<button type="button" className="btn btn-primary">Отправить</button>
			</div>
		</div>
	);
};