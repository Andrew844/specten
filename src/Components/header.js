import React from "react";
import {Component} from "react";

import "./css/header.css";

export default class Header extends Component {
	render () {
		const btnColor = "#313ef5";
		return (
			<div className="header">
				<div className="logo"
					onClick={() => this.props.changePages("main")}>
					<h3>МиассСпецТэн</h3>
				</div>
				<div className="links">
					<p className="main"
						 style={{backgroundColor: "#212a9e"}}
						 onClick={() => {
							 this.props.changePages("main");
							 }}>Главная</p>
					<p className="catalogue"
						 style={{backgroundColor: btnColor}}
						 onClick={() => {
							this.props.changePages("catalogue");
							}}>Каталог</p>
					<p className="useful"
						 style={{backgroundColor: btnColor}}
						 onClick={() => {
						 	this.props.changePages("useful");
						 	}}>Полезное</p>
					<p className="contacts"
						 style={{backgroundColor: btnColor}}
						 onClick={() => {
							 this.props.changePages("contacts");
							 }}>Контакты</p>
				</div>
			</div>
		);
	}
}