import React, {Component} from "react";

import "../css/catalogue.css";
import air from "../../img/catalogue/air.jpg";
import water from "../../img/catalogue/water.jpg";
import finned from "../../img/catalogue/finned.jpg";
import noPhoto from "../../img/catalogue/no-photo.jpg";

export default class Catalogue extends Component {

	state = {
		cards: {
			air: {
				cardHeader: "Воздушные ТЭНы",
				cardImg: air,
				cardDescription: `Нагревательные элементы – ТЭН для воздуха и других газообразных 
													сред изготавливаются по стандартам ГОСТ 13268-88. Классификация и маркировка
													воздушных ТЭНов зависит от состояния нагреваемой среды и материала изготовления`
			},
			water: {
				cardHeader: "Водяные ТЭНы",
				cardImg: water,
				cardDescription: `Главным предназначением водяного ТЭНа является преобразования 
													электрической энергии в тепловую в водной среде. В основном он 
													применяется в бытовых условиях для нагрева и кипячения воды, также 
													в промышленности для нагрева слабых растворов щелочей и кислот.`
			},
			finned: {
				cardHeader: "Оребрённые ТЭНы",
				cardImg: finned,
				cardDescription: `Оребренные ТЭНы изготавливаются производителями из нержавеющей стали, что предотвращает 
													систему от быстрого старения и поломки. Оребрение создается лентой, либо накатным 
													способом алюминием по спирали.`
			},
			medician: {
				cardHeader: "Медицинские ТЕНы",
				cardImg: noPhoto,
				cardDescription: `ТЭНы специального вида помимо использования в быту или промышленности, также 
													употребляется в медицине. <br/>
													<b>Это дистилляторы, парогенераторы и стерилизаторы. Они очень широко применяются 
													в медицинских учреждениях.</b>`
			},
			tanb: {
				cardHeader: "ТЭНБ",
				cardImg: noPhoto,
				cardDescription: `ТЭНБ – блоки трубчатых электронагревателей. Состоят они из одного или 
													нескольких ТЭНов, которые герметично припаяны на общем фланце. На их 
													расположение влияет рабочее давление среды.`
			},
			electricFurnace: {
				cardHeader: "Электропечи Пэт",
				cardImg: noPhoto,
				cardDescription: `Электропечи Пэт – это оборудование, которое причисляют к отопительному. 
													Печи достаточно компактны, очень удобны в использовании. Область их применения в основном 
													при отоплении строительных бытовок, башенных кранов, электротранспорта и некоторых 
													помещений малого размера.`
			},
			electricBoiler: {
				cardHeader: "Электрокотлы",
				cardImg: noPhoto,
				cardDescription: `Электрокотлы используются в виде дополнительного или резервного 
													источника обогрева систем водяного отопления жилых или производственных 
													помещений, зданий, которые имеют открытую систему отопления.`
			},
			electricConvectors: {
				cardHeader: "Электроконвекторы",
				cardImg: noPhoto,
				cardDescription: `Конвекторы электрические Элкон ЭВНС имеют тонкий корпус, который 
													покрыт полимерным покрытием белого цвета. По этой причине он вполне
													гармонично впишется в интерьер любого помещения и будет служить как
													основной источник отопления.`
			},
			calorifer: {
				cardHeader: "Калориферы",
				cardImg: noPhoto,
				cardDescription: `Если у Вас есть необходимость дополнительно обогревать 
													бытовое или промышленное помещение, то обратите внимание на электрокалориферы.
													Электрокалориферы – это уникальные универсальные приборы отопления. 
													Наше предприятие готово поставлять калориферы различных марок и модификаций. `
			}
		},
		searchQuery: ""
	};

	changeSearch = e => {
		this.setState({searchQuery: e.target.value});
	};

	search(cards, query) {
		if (query.length === 0) return cards;

		return Object.values(cards).filter(card => {
			return card.cardHeader.toLowerCase().indexOf(query.toLowerCase()) > -1;
		});
	}

	parseCards = cards => {
		let parsedCards = [];
	
		Object.values(cards).forEach(card => {
			let outputCard = (
				<div className="card" key={card.cardHeader}>
					<div className="card-header">
						<h5>{card.cardHeader}</h5>
					</div>
					<div className="card-img">
						<img src={card.cardImg} alt={card.cardHeader}/>
					</div>
					<div className="card-description">
						<p>{card.cardDescription}</p>
					</div>
				</div>
			);
			parsedCards.push(outputCard);
		});
	
		return parsedCards;
	};

	render () {

		const sortedCards = this.search(this.state.cards, this.state.searchQuery);
		const visibleCards = this.parseCards(sortedCards);

		return (
			<div className="catalogue-page" id="catalogue-page">
				<div className="section-header">
					<h4>Каталог</h4>
				</div>
				<div className="search-panel">
					<div  className="input-field">
						<input id="search" type="text" required={true} valid="true"
									 onChange={this.changeSearch}/>
						<label htmlFor="search">
							<span className="content-name">Введите запрос</span>
						</label>
					</div>
				</div>
				<div className="cards">
					{visibleCards}
				</div>
			</div>
		)
	};
};