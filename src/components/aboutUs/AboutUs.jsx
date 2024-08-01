import React from "react";
import arrows from "../../assets/arrows.svg";
import "./AboutUs.css";
import CustomersCard from "../prductCard/customersCard/CustomersCard";

const AboutUs = () => {
	return (
		<section className="about-section">
			<div className="container">
				<div className="about">
					<div className="about__top">
						<h2 className="about__title">What our customer say about this</h2>

						<div className="about __top-arrow">
							<img src={arrows} alt="arrows" />
						</div>
					</div>
					<div className="about__bottom">
						<CustomersCard />
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutUs;
