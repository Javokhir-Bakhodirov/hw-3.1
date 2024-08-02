import React from "react";
import bike from "../../assets/bike.svg";
import star from "../../assets/star.svg";
import "./Card.css";

const renderStars = (rating) => {
	const stars = [];
	for (let i = 0; i < rating; i++) {
		stars.push(<img key={i} src={star} alt="star" width={18} height={18} />);
	}
	return stars;
};

const Card = ({ product }) => {
	return (
		<li className="product" key={product.id}>
			<img src={product.image} alt={product.name} />
			<div className="product__content">
				<div className="name-wrapper">
					<h2 className="product__name">{product.name}</h2>
					<div className="product__rating">{renderStars(product.rating)}</div>
				</div>
				<div className="info-wrapper">
					<span>
						<img width={18} height={18} src={bike} alt="bike" />
						Free Delivery
					</span>
					<span>
						<img width={18} height={18} src={bike} alt="bike" />
						{product.cooking} min
					</span>
				</div>
				<a href="#" className="hero__order-link1">
					Order Now
				</a>
			</div>
		</li>
	);
};

export default Card;
