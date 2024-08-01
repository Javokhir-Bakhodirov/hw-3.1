import "./Application.css";
import appStore from "../../assets/appImg1.svg";
import playMarket from "../../assets/appImg2.svg";
import iphone from "../../assets/productImg/iphone.png";

const Application = () => {
	return (
		<section className="app-section">
			<div className="container">
				<div className="app">
					<div className="app__content">
						<h2 className="app__title">Download our Mobile App</h2>
						<p className="app__text">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus
							cum purus bibendum risus nibh cursus integer dolor, commodo. Amet,
							aliquam condimentum.
						</p>
						<div className="app__link">
							<a href="#" className="app__link">
								<img src={appStore} alt="App store" />
							</a>
							<a href="#" className="app__link">
								<img src={playMarket} alt="Play Market" />
							</a>
						</div>
					</div>
					<div className="app__img-box">
						<img src={iphone} alt="Phone" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Application;
