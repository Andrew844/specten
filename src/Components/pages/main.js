import React from "react";
import {Component} from "react";

import "../css/main.css";
import business from "../../img/benefits/business.jpg";
import money from "../../img/benefits/money.jpg";
import dock from "../../img/benefits/dock.jpg";
import setting from "../../img/benefits/setting.jpeg";

export default class Main extends Component {
	render () {
		return (
			<div className="main">
				<section className="welcome">
					<div className="description">
						<h4>Добро пожаловать</h4>
						<p>Наша компания <span>МиассСпецТэн</span> занимается поставками ТЭН по всей территории Российской Федерации, 
							а также в страны ближнего зарубежья.
							<br/>
							<br/>
							Нас не смущают дальние расстояния и объемы поставок, так как в МиассCпецТэн работают профессионалы
							с большим опытом и высоким уровнем ответственности. Работая оперативно, грамотно и надежно, <span>мы 
							поддерживаем партнерские отношения со многими предприятиями</span> – производителями промышленного оборудования, 
							находящиеся на территории России.
							</p>
					</div>
					<div className="application-form">
						<h4>Отправить заявку</h4>
						<div  className="input-field">
							<input id="email" type="text"  className="validate" />
							<label htmlFor="email">Введите email</label>
        		</div>
						<div  className="input-field">
							<input id="phone-number" type="text"  className="validate" />
							<label htmlFor="phone-number">Введите номер телефона</label>
        		</div>
						<div  className="input-field">
							<textarea id="question"  className="materialize-textarea"></textarea>
          		<label htmlFor="question">Задайте ваш вопрос</label>
        		</div>
						<a href="google.com"  className="waves-effect waves-light btn-large">Отправить</a>
					</div>
				</section>
				
				<section className="benefits">
					<h4>Наши преимущества</h4>
					<benefits-cards>
						<benefit-card>
							<h5>Высокое качество</h5>
							<img src={business} alt="Высокое качество и хорошая цена"/>
							<p>Мы уверены в качестве поставляемого товара и в соответствии его цены реальности.</p>
						</benefit-card>
						<benefit-card>
							<h5>Гибкая система скидок</h5>
							<img src={money} alt="Гибкая система скидок"/>
							<p>	Для постоянных клиентов и оптовых покупателей у нас действует гибкая система скидок, a также 
							проводятся акции.</p>						
						</benefit-card>
						<benefit-card>
							<h5>Доставка</h5>
							<img src={dock} alt="Гибкая система скидок"/>
							<p>МиассCпецТэн  сможет доставить приобретенную 
							Вами продукцию в любой транспортный узел, находящийся в Миассе.</p>
						</benefit-card>
						<benefit-card>
							<h5>Консультация и отладка</h5>
							<img src={setting} alt="Гибкая система скидок"/>
							<p>Мы занимаемся не только поставкой оборудования, но и осуществляем консультационную помощь 
							в его установке, наладке.</p>
						</benefit-card>
					</benefits-cards>
				</section>

				<section className="heating">
					<h4>У нас широкий ассортимент</h4>

					<div className="collapsible-lists">
						<div className="heating-elements">
							<h5>Нагревательных элементов</h5>
							<ul className="collapsible">
								<li>
									<div className="collapsible-header">Для нагрева воздуха</div>
									<div className="collapsible-body"><span>ТЭН, ТЭНР, ТЭНП</span></div>
								</li>
								<li>
									<div className="collapsible-header">Для нагрева воды</div>
									<div className="collapsible-body"><span>ТЭН, БЭВ, ТЭНП, СЭВ</span></div>
								</li>
								<li>
									<div className="collapsible-header">Для нагрева масел</div>
									<div className="collapsible-body"><span>ТЭН, ТЭНП, БЭВ, СЭМ</span></div>
								</li>
								<li>
									<div className="collapsible-header">Для контактного нагрева</div>
									<div className="collapsible-body"><span>плоские нагреватели, кольцевые нагреватели, ТЭНП, ЭНГЛ</span></div>
								</li>
								<li>
									<div className="collapsible-header">Для медицинского оборудования</div>
									<div className="collapsible-body"><span>ТЭНы для стерилизаторов и дистилляторов</span></div>
								</li>
								<li>
									<div className="collapsible-header">Для пищевого оборудования</div>
									<div className="collapsible-body"><span>электроконфорки, ТЭНы для варочных котлов</span></div>
								</li>
							</ul>
						</div>

						<div className="heating-equipment">
							<h5>Промышленных и бытовых нагревательных приборов</h5>
							<ul className="collapsible">
								<li>
									<div className="collapsible-header">Для нагрева воздуха</div>
									<div className="collapsible-body"><span>тепловые пушки, калориферы, ПЭТ, конвекторы</span></div>
								</li>
								<li>
									<div className="collapsible-header">Для нагрева воды</div>
									<div className="collapsible-body"><span>электрокотлы, ЭВНКА, ЭВПП</span></div>
								</li>
								<li>
									<div className="collapsible-header">Для сауны</div>
									<div className="collapsible-body"><span>электрокаменки</span></div>
								</li>
								<li>
									<div className="collapsible-header">Для обогрева дома, промышленного помещения</div>
									<div className="collapsible-body"><span>конвекторы, калориферы, тепловые пушки, ЭВПМ, тепловые завесы, ПЭТ.</span></div>
								</li>
							</ul>
						</div>
					</div>
					
        
				</section>
			</div>
		);
	};
};