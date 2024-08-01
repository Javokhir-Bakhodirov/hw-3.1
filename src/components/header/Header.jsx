import "./Header.css";
import logo from "../../assets/logo.svg";
import SearchBtn from "../btn/SearchBtn";
import BoxBtn from "../btn/BoxBtn";
import LoginBtn from "../btn/loginBtn/LoginBtn";

const Header = () => {
	return (
		<header className="site-header">
			<div className="container">
				<div className="header">
					<div className="header__logo-box">
						<img src={logo} alt="logo" />
					</div>
					<nav className="header__nav nav">
						<ul className="nav__list">
							<li className="nav__item">
								<a href="#" className="nav__link">
									Home
								</a>
							</li>
							<li className="nav__item">
								<a href="#" className="nav__link">
									Service
								</a>
							</li>
							<li className="nav__item">
								<a href="#" className="nav__link">
									Menu
								</a>
							</li>
							<li className="nav__item">
								<a href="#" className="nav__link">
									Help
								</a>
							</li>
						</ul>
					</nav>
					<div className="header__btn">
						<SearchBtn />
						<BoxBtn />
						<LoginBtn />
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
