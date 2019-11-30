import React from "react";
import {Component} from "react";

import "../css/catalogue.css";
import air from "../../img/catalogue/air.jpg";
import water from "../../img/catalogue/water.jpg";
import finned from "../../img/catalogue/finned.jpg";
import noPhoto from "../../img/catalogue/no-photo.jpg";

export default class Catalogue extends Component {
	render () {
		return (
			<div className="catalogue-page" id="catalogue-page">
				<div className="section-header">
					<h4>Каталог</h4>
				</div>
				<div className="search-panel">
					<div className="input-field">
						<input id="search" type="password" className="validate"/>
						<label htmlFor="search">Search</label>
					</div>
				</div>
				<div className="cards">
					<div className="card">
						<div className="card-header">
							<h5>Воздушные ТЭНы</h5>
						</div>
						<div className="card-img">
							<img src={air} alt="Воздушный ТЭН"/>
						</div>
						<div className="card-description">
							<p>Нагревательные элементы – ТЭН для воздуха и других газообразных 
								сред изготавливаются по стандартам ГОСТ 13268-88. Классификация и маркировка
								 воздушных ТЭНов зависит от состояния нагреваемой среды и материала изготовления</p>
						</div>
					</div>
					<div className="card">
						<div className="card-header">
							<h5>Водяные ТЭНы</h5>
						</div>
						<div className="card-img">
							<img src={water} alt="Водяной ТЭН"/>
						</div>
						<div className="card-description">
							<p>Главным предназначением водяного ТЭНа является преобразования 
								электрической энергии в тепловую в водной среде. В основном он 
								применяется в бытовых условиях для нагрева и кипячения воды, также 
								в промышленности для нагрева слабых растворов щелочей и кислот.</p>
						</div>
					</div>
					<div className="card">
						<div className="card-header">
							<h5>Оребренные ТЭНы</h5>
						</div>
						<div className="card-img">
							<img src={finned} alt="Оребрённые ТЭНы"/>
						</div>
						<div className="card-description">
							<p>Оребренные ТЭНы изготавливаются производителями из нержавеющей стали, что предотвращает 
								систему от быстрого старения и поломки. Оребрение создается лентой, либо накатным 
								способом алюминием по спирали.</p>
						</div>
					</div>
					<div className="card">
						<div className="card-header">
							<h5>Медицинские ТЕНы</h5>
						</div>
						<div className="card-img">
							<img src={noPhoto} alt="Медицинские ТЕНы"/>
						</div>
						<div className="card-description">
							<p>ТЭНы специального вида помимо использования в быту или промышленности, также употребляется в медицине. <br/>
								<b>Это дистилляторы, парогенераторы и стерилизаторы. Они очень широко применяются в медицинских учреждениях.</b> </p>
						</div>
					</div>
					<div className="card">
						<div className="card-header">
							<h5>ТЭНБ</h5>
						</div>
						<div className="card-img">
							<img src={noPhoto} alt="ТЭНБ"/>
						</div>
						<div className="card-description">
							<p>ТЭНБ – блоки трубчатых электронагревателей. Состоят они из одного или 
								нескольких ТЭНов, которые герметично припаяны на общем фланце. На их 
								расположение влияет рабочее давление среды.</p>
						</div>
					</div>
					<div className="card">
						<div className="card-header">
							<h5>Электропечи Пэт</h5>
						</div>
						<div className="card-img">
							<img src={noPhoto} alt="Электропечи Пэт"/>
						</div>
						<div className="card-description">
							<p>Электропечи Пэт – это оборудование, которое причисляют к отопительному. 
								Печи достаточно компактны, очень удобны в использовании. Область их применения в основном 
								при отоплении строительных бытовок, башенных кранов, электротранспорта и некоторых помещений малого размера.</p>
						</div>
					</div>
					<div className="card">
						<div className="card-header">
							<h5>Электрокотлы</h5>
						</div>
						<div className="card-img">
							<img src={noPhoto} alt="Электрокотлы"/>
						</div>
						<div className="card-description">
							<p>Электрокотлы используются в виде дополнительного или резервного 
								источника обогрева систем водяного отопления жилых или производственных 
								помещений, зданий, которые имеют открытую систему отопления.</p>
						</div>
					</div>
					<div className="card">
						<div className="card-header">
							<h5>Электроконвекторы</h5>
						</div>
						<div className="card-img">
							<img src={noPhoto} alt="Электроконвекторы"/>
						</div>
						<div className="card-description">
							<p>Конвекторы электрические Элкон ЭВНС имеют тонкий корпус, который 
								покрыт полимерным покрытием белого цвета. По этой причине он вполне
								 гармонично впишется в интерьер любого помещения и будет служить как
								  основной источник отопления.</p>
						</div>
					</div>
					<div className="card">
						<div className="card-header">
							<h5>Калориферы</h5>
						</div>
						<div className="card-img">
							<img src={noPhoto} alt="Калориферы"/>
						</div>
						<div className="card-description">
							<p>Если у Вас есть необходимость дополнительно обогревать 
								бытовое или промышленное помещение, то обратите внимание на электрокалориферы.
								 Электрокалориферы – это уникальные универсальные приборы отопления. 
								 Наше предприятие готово поставлять калориферы различных марок и модификаций. </p>
						</div>
					</div>
				</div>
			</div>
		);
	};
};