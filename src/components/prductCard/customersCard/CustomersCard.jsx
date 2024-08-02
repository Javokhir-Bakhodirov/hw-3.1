import "./CustomersCard.css";
import stars from "../../../assets/stars.svg";

const CustomersCard = ({ props }) => {
	console.log(props);
	return (
		<li className="customer" key={props.id}>
			<img src={stars} alt="" />
			<p className="customer__text">"{props.description}"</p>
			<div className="custumer__info">
				<img src={props.avatar} alt="avatar" width={52} height={52} />
				<div className="customer__n">
					<h3 className="customer__name">{props.name}</h3>
					<p className="customer__job">{props.job}</p>
				</div>
			</div>
		</li>
	);
};
export default CustomersCard;
