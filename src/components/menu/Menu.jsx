import Card from "../prductCard/Card";
import { products } from "../../data/product.js";
import "./Menu.css";

const Menu = () => {
	return (
		<section className="menu-section">
			<div className="container">
				<div className="menu">
					<div className="menu__info">
						<h2 className="menu__title">Special Menu for you</h2>
						<p className="menu__text">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus
							cum purus bibendum risus nibh cursus integer dolor, commodo. Amet,
							aliquam condimentum.
						</p>
					</div>
					<ul className="products">
						{products.map((product) => (
							<Card key={product.id} product={product} />
						))}
					</ul>
				</div>
			</div>
		</section>
	);
};

export default Menu;
