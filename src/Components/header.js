import React from "react";

import "./css/header.css";

export default function Header (props) {
	const btnColor = "#313ef5";
	return (
		<div className="header">
			<div className="logo"
				title="На главную"
				onClick={() => props.changePages("main")}>
				<h3>МиассСпецТэн</h3>
			</div>
			<div className="links">
				<p className="main waves-effect"
					 style={{backgroundColor: "#2c38c9"}}
					 onClick={() => {
						 props.changePages("main");
						 }}>Главная</p>
				<p className="catalogue waves-effect"
					 style={{backgroundColor: btnColor}}
					 onClick={() => {
						props.changePages("catalogue");
						}}>Каталог</p>
				<p className="useful waves-effect"
					 style={{backgroundColor: btnColor}}
					 onClick={() => {
					 	props.changePages("useful");
					 	}}>Полезное</p>
				<p className="contacts waves-effect"
					 style={{backgroundColor: btnColor}}
					 onClick={() => {
						 props.changePages("contacts");
						 }}>Контакты</p>
			</div>
			<div className="phones"
					 title="Контакты"
					 onClick={() => props.changePages("contacts")}>
				<p>	8 908 82603 01 <br/>
						(3513) 59-17-67</p>
			</div>
		</div>
	);
};