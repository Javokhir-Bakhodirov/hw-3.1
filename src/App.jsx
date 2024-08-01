import "./App.css";
import AboutUs from "./components/aboutUs/AboutUs";
import Application from "./components/app/Application";
import Header from "./components/header/Header";
import Hero from "./components/heroSection/Hero";
import Menu from "./components/menu/Menu";

function App() {
	return (
		<>
			<Header />
			<main>
				<Hero />
				<Menu />
				<Application />
				<AboutUs />
			</main>
		</>
	);
}

export default App;
