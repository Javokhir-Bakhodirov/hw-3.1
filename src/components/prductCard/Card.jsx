import React from "react";
import { products } from "../../data/product.js";
import bike from "../../assets/bike.svg";
import "./Card.css";

const Card = () => {
	return (
		<ul className="products">
			{products.map((product) => (
				<li className="product" key={product.id}>
					<img src={product.image} />
					<div className="product__content">
						<div className="name-wrapper">
							<h2 className="product__name">{product.name}</h2>
							<span>{product.rating}</span>
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
			))}
		</ul>
	);
};

export default Card;
