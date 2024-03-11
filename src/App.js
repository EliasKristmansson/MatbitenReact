import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact"
import Menu from "./pages/menu";
import Delivery from "./pages/delivery";
import Shop from "./pages/shop";
import Underconstruction from "./pages/underconstruction";

import Header from "./components/header";

import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div>
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/menu" element={<Menu />} />
				<Route path="/delivery" element={<Delivery />} />
				<Route path="/shop" element={<Shop />} />
				<Route path="/underconstruction" element={<Underconstruction />} />
			</Routes>
		</Router>
	</div>
  );
}

export default App;
