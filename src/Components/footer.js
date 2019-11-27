import React from "react";
import {Component} from "react";

import "./css/footer.css";

export default class Footer extends Component {
	render () {
		return (
			<footer>
				<div className="left-part">
					<p>OOO МиассСпецТэн</p>
					<p>456318 Челябинская обл., г. Миасс, ул.Уральских Добровольцев, 25-30</p>
					<p>телефон: 8 908 82603 01; (3513) 59-17-67</p>
				</div>
				<div className="right-part">
					<p>© 2018 МиассСпецТэн. Все права защищены.</p>
				</div>
			</footer>
		);
	};
};