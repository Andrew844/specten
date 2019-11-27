import React from "react";
import {Component} from "react";

import Header from "./header";
import Main from "./pages/main";
import Contacts from "./pages/contacts";
import Footer from "./footer";
import Useful from "./pages/useful";

export default class App extends Component {
	
	state = {
		filter: "main",
		clickedOnMain: true
	}

	changePage = page => {
		this.setState({filter: page});
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
					for (let i = 0; i < linksArr.length; i++) {
						linksArr[i].style.backgroundColor = "#313ef5";
					}
					main.style.backgroundColor = "#212a9e";
					break;
				case "catalogue":
						for (let i = 0; i < linksArr.length; i++) {
							linksArr[i].style.backgroundColor = "#313ef5";
						}
						catalogue.style.backgroundColor = "#212a9e";
					break;
				case "useful":
						for (let i = 0; i < linksArr.length; i++) {
							linksArr[i].style.backgroundColor = "#313ef5";
						}
						useful.style.backgroundColor = "#212a9e";
					break;
				case "contacts":
						for (let i = 0; i < linksArr.length; i++) {
							linksArr[i].style.backgroundColor = "#313ef5";
						}
						contacts.style.backgroundColor = "#212a9e";
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
				return <Useful />
			default:
				console.log(`Incorrect parameter: ${page}`);
		}
	};

	

	render () {
		const visiblePage = this.returnPages(this.state.filter);
		return (
			<div className="App">
				<Header	changePages={this.changePage}/>
				{visiblePage}
				<Footer/>
			</div>
		);
	};
};
