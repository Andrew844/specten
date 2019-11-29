import React from "react";
import {Component} from "react";

import "../css/catalogue.css";

export default class Catalogue extends Component {
	render () {
		return (
			<div className="catalogue-page">
				<div className="section-header">
					<h4>Каталог</h4>
				</div>
				<div className="search-panel">
					<div className="input-field">
						<input id="search" type="password" className="validate"/>
						<label htmlFor="search">Search</label>
					</div>
				</div>
			</div>
		);
	};
};