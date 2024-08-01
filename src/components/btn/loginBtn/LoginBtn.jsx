import React from "react";
import arrow from "../../../assets/arrow.svg";
import "./LoginBtn.css";

const LoginBtn = () => {
	return (
		<div>
			<a className="link" type="button">
				<img src={arrow} alt="" /> Login
			</a>
		</div>
	);
};

export default LoginBtn;
