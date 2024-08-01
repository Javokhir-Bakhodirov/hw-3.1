import "./CustomersCard.css";
import { customers } from "../../../data/customers.js";
import stars from "../../../assets/stars.svg";

const CustomersCard = () => {
	return (
		<ul className="customers__list">
			{customers.map((customer) => (
				<li className="customer" key={customer.id}>
					<img src={stars} alt="" />
					<p className="customer__text">"{customer.description}"</p>
					<div className="custumer__info">
						<img src={customer.avatar} alt="avatar" width={52} height={52} />
						<div className="customer__n">
							<h3 className="customer__name">{customer.name}</h3>
							<p className="customer__job">{customer.job}</p>
						</div>
					</div>
				</li>
			))}
		</ul>
	);
};

export default CustomersCard;
