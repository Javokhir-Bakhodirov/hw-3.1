import React from "react";
import "./Hero.css";
import bike from "../../assets/bike.svg";
import video from "../../assets/video.svg";
import image from "../../assets/image.png";

const Hero = () => {
	return (
		<section className="hero-section">
			<div className="container">
				<div className="hero">
					<div className="hero__content">
						<a className="hero__content-link" href="#">
							Fast Delivery <img width={36} height={36} src={bike} alt="bike" />
						</a>
						<h1 className="hero__title">
							Fastest <span>Delivery</span> & Esay <span>Pickup.</span>
						</h1>
						<p className="hero__text">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet
							tempus felis vitae sit est quisque.
						</p>
						<div className="hero__links">
							<a href="#" className="hero__order-link">
								Order Now
							</a>
							<a href="#" className="hero__video-link">
								{" "}
								<img src={video} alt="video" />
								Watch Video
							</a>
						</div>
					</div>
					<div className="hero__img">
						<img width={649} height={606} src={image} alt="" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
