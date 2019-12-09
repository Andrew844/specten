import React from "react";
import {Component} from "react";

import Header from "./header";
import Main from "./pages/main";
import Contacts from "./pages/contacts";
import Footer from "./footer";
import Catalogue from "./pages/catalogue";
import Useful from "./pages/useful";

export default class App extends Component {
	
	state = {
		filter: "main"
	};

	changePage = page => {
		this.setState({filter: page});
	};

	changePanelColor = (linksArr, changingLink) => {
		for (let i = 0; i < linksArr.length; i++) {
			linksArr[i].style.backgroundColor = "#313ef5";
		}
		changingLink.style.backgroundColor = "#2c38c9";
	};

	changeBtnColor = linkName => {
		let main = document.querySelector(".main"),
				catalogue = document.querySelector(".catalogue"),
				useful = document.querySelector(".useful"),
				contacts = document.querySelector(".contacts");
		let linksArr = [main, catalogue, useful, contacts];
		if (main && catalogue && useful && contacts) {
			switch (linkName) {
				case "main":
					this.changePanelColor(linksArr, main);
					break;
				case "catalogue":
					this.changePanelColor(linksArr, catalogue);
					break;
				case "useful":
					this.changePanelColor(linksArr, useful);
					break;
				case "contacts":
					this.changePanelColor(linksArr, contacts);
					break;
				default:
					console.log(`LinkName "${linkName}" is incorrect`);
			}
		}
	};

	returnPages = page => {
		switch(page) {
			case "main":
				this.changeBtnColor("main");
				return <Main />;
			case "contacts":
				this.changeBtnColor("contacts");
				return <Contacts />;
			case "useful":
				this.changeBtnColor("useful");
				return <Useful />;
			case "catalogue":
				this.changeBtnColor("catalogue");
				return <Catalogue />;
			default:
				console.log(`Incorrect parameter: ${page}`);
		}
	};

	render () {
		return (
			<div className="App">
				<Header	changePages={this.changePage}/>
					{this.returnPages(this.state.filter)}
				<Footer/>
			</div>
		);
	};
};
