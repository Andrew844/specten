import React from "react";

import "../css/useful.css";

export default function Useful () {
	return (
		<div className="useful-page" id="useful-page">
			<div className="section-header">
				<h4>О применении ТЭН</h4>
				<p>В этом разделе вы найдете полезные материалы обо всех областях применения ТЭН, 
					их свойствах, характеристиках, а так же полезные советы</p>
			</div>
			<div className="cards">
				<div className="card infrared-heaters" data-toggle="modal" data-target="#infrared-heaters">
					<p>Инфракрасные обогреватели</p>
				</div>
				<div className="card floor-convectors" data-toggle="modal" data-target="#floor-convectors">
					<p>Напольные конвекторы</p>
				</div>
				<div className="card storage-heaters" data-toggle="modal" data-target="#storage-heaters">
					<p>Накопительные водонагреватели</p>
				</div>
				<div className="card electric-heaters" data-toggle="modal" data-target="#electric-heaters">
					<p>Электрические нагреватели</p>
				</div>
			</div>

			<div className="row">
				<div className="modal fade" id="infrared-heaters" tabIndex="-1" role="dialog" aria-labelledby="asdf" aria-hidden="true">
				<div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title">Инфракрасные обогреватели</h5>
							<button type="button" className="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div className="modal-body">
							<div className="description">
									<p>Как всем известно, из законов физики, теплый воздух имеет 
										свойство перемещаться к потолку в помещении и скапливаться именно там. 
										И на основе этого принципа действуют различные игрушки, способные летать, 
										например воздушные шары.</p>
									<p>Именно по этой причине возникают проблемы при обогреве комнат. 
										Весь теплый воздух скапливается под потолком. И эта зона, как правило, 
										по температуре на 10 градусов выше температуры воздуха в зоне, где находятся люди.</p>
									<p>Поэтому обогрев комнат при использовании центрального отопления или 
										электрического масляного радиатора электрическая энергия расходуется не эффективно. 
										А еще хуже, если потолки в помещении очень высокие. Тогда комнаты придется обогревать 
										еще дольше и намного больше потрать денежных средств.</p>
									<p>Для решения такой проблемы были созданы инфракрасные обогреватели, которые 
										отличаются выгодой от других видов обогрева помещений. За счет них комната нагревается 
										в равной степени, что позволяет сэкономить на отоплении. При снижении температуры воздуха 
										на 1 градус мы получаем экономию 5%.</p>
									<p>Таким образом, владельцы высоких потолков при использовании данной системы смогут сберечь более 60% электроэнергии.</p>
									<p>Функционирование инфракрасных обогревателей может производиться совместно 
										с центральной системой отопления. Но наиболее эффективным вариантом обогрева 
										помещения будет использование только одних инфракрасных обогревателей. 
										Они позволят в большой степени сэкономить финансовые средства при минимальных 
										затратах электроэнергии, в отличие от других средств обогрева. А их установка, монтировка 
										и демонтировка очень проста. И в эксплуатации обогревателя не встречается никаких трудностей.</p>
									<p>Еще одним плюсом инфракрасных обогревателей при их установке на потолке является 
										то, что они освобождаю немалое пространство в комнате. Использование инфракрасных обогревателей 
										очень функционально.</p>
									<p>Чем выше установлен обогреватель, тем быстрее нагреется помещение. 
										Так, при применении центрального теплоснабжения потребуется не менее суток, 
										а при использовании инфракрасных обогревателей это время сокращается до нескольких часов.</p>
									<p>Это очень выгодно в помещениях с высокими потолками, таких как, цеха, 
										склады и т.п. Также существует специальная система, позволяющая отключать 
										обогреватель при достижении определенного температурного режима и наоборот.</p>
								</div>
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-primary" data-dismiss="modal">Закрыть</button>
						</div>
					</div>
				</div>
			</div>

			<div className="modal fade" id="storage-heaters" tabIndex="-1" role="dialog" aria-labelledby="storage-heaters-title" 
			aria-hidden="true">
				<div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title">Накопительные водонагреватели</h5>
							<button type="button" className="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div className="modal-body">
							<div className="description">
								<p>Накопительные водонагреватели – это одно из лучших созданий техники. </p>
								<p>Представляют они собой баки разного размера и объема. Функциональность их 
									осуществляется таким образом, что холодная вода, поступающая из центрального 
									водопровода наполняет этот бак, там она греется и используется хозяином по надобности.</p>
								<p>А за счет усовершенствованной системы теплоизоляции, вода очень долгое 
									время остается горячей. И, когда температура понижается, водонагреватель 
									автоматически включается и подогревает содержимое.</p>
								<p>При покупке подобного бака, у каждого возникает вопрос: С каким объемом лучше купить водонагреватель?</p>
								<p>Известно, что на одну среднестатистическую семью необходим бак объемом не менее 150-170 литров.</p>
								<p>Но, если у Вас большая квартира и располагают денежные возможности, то лучше приобрести водонагреватель с большим объемом,
									чтобы потом не тратиться дважды при замене этого бака на новый побольше.</p>
								<p> Также при покупке каждый желает, чтобы «выходящая» вода оставалась такой же чистой, а может 
									быть даже и лучше. На качество воды влияет поверхности самого бака, то есть 
									из чего он произведен.</p>
								<p>Многие фирмы делают их из нержавеющей стали, затем для создания «оболочки» покрывают ее специальной глазурью. 
									Но она способна к разрушению. Поэтому через какое-то время потрескавшаяся глазурь приведет
									к коррозии металла, тем самым загрязняя воду.</p>
								<p>Еще есть баки с тефлоновым покрытием, они не плохие. Занимают второе место по качеству поверхностей водонагревателей.</p>
								<p>Но самыми лучшими, по многим исследованиям, выделяют баки, стенки которых сделаны из 
									специальной высоколегированной, устойчивой к коррозийным воздействиям стали.</p>
								<p>Они отличаются долговечностью, имеют выровненную поверхность, но и стоят дороже остальных.</p>
								<p> Также на чистоту влияют профилактические обработки бака специальными чистящими средствами,
									не оставляющими налета. В таком случае у Вас всегда в доме будет 
									горячая вода, но к тому же еще и без вредных примесей.</p>
							</div>
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-primary" data-dismiss="modal">Закрыть</button>
						</div>
					</div>
				</div>
			</div>

			<div className="modal fade" id="floor-convectors" tabIndex="-1" role="dialog" aria-labelledby="floor-convectors-title" 
			aria-hidden="true">
				<div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title">Виды конвекторов</h5>
							<button type="button" className="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div className="modal-body">
							<div className="description">
								<p>Из года в год с каждым происходит такая картина, когда на дворе унылая и холодная осень, льют серые дожди…</p>
								<p>И так грустно и холодно!</p>
								<p>Так хочется жаркого лета или просто посидеть дома в теплой комнатке за чашечкой горячего кофе. 
									А дома, как всегда в это время холодно, сыро и противно. И отопление коммунальные службы включат еще не скоро. 
									Вот ужас! И тут все начинают обогреваться как могут. Кто то достает старые электрические камины, кто то покупает обогреватели…</p>
								<p>А мы Вам советуем конвекторы.</p>
								<p>Это такой же обычный обогреватель с тенами внутри. Принцип его функциональности заключается на заборе воздуха из помещения, 
									согрева и отдачи обратно. Главным плюсом его работы является бесшумность, в отличие от многих других его собратьев.</p>
								<p>Автоматически отключается при нагреве заданной температуры в помещении. В основном он крепится на 
									стену, что очень удобно, но также может передвигаться на специальных ножках. Делятся они на газовые и электрические.</p>
								<p> Но покупатели больше предпочитают электрический, так как он более компактен и экономичен в использовании.</p>
							</div>
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-primary" data-dismiss="modal">Закрыть</button>
						</div>
					</div>
				</div>
			</div>

			<div className="modal fade" id="electric-heaters" tabIndex="-1" role="dialog" aria-labelledby="electric-heaters-title" 
			aria-hidden="true">
				<div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title">Электрический водонагреватель</h5>
							<button type="button" className="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div className="modal-body">
							<div className="description">
								<p>В современном ритме жизни и развитии техники мы не представляем жизнь без примитивных удобств, например горячая вода.
									Сейчас за счет использования электрического водонагревателя мы бесперебойно и в любом месте можем пользоваться горячей водой.</p>
								<p>Существует большое множество видов таких водонагревателей. И их эксплуатация также различна. Например, в квартире 
									рекомендуется использовать систему проточный напорный водонагреватель.</p>
								<p>А если же Вы хотите обеспечить горячей водой, только отдельные места, например ванную комнату, в таком случае лучше будет установить проточный безнапорный водонагреватель.
									В комплекте они еще идут с различными насадками для его эксплуатации.</p>
								<p>Этот вид очень хорош, но имеется и отрицательная сторона: потребляется большое 
									количество электрических мощностей. Если же вы тратите большое количество горячей воды и хотите, 
									чтобы в доме был ее запас, то в таком случае оптимальным вариантом будет использование накопительного водонагревателя.</p>
								<p>Но у него также есть свой минус – малая скорость нагрева воды и он занимает большое
									пространство при его установке. Но происходит экономия энергии.</p>
							</div>
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-primary" data-dismiss="modal">Закрыть</button>
						</div>
					</div>
				</div>
			</div>
			</div>
		</div>
	);
};