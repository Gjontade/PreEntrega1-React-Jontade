import "./App.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemContainer from "./components/ItemContainer/ItemContainer";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<NavBar />
				<Routes>
					<Route path="/" element={<ItemListContainer greeting={"¡BIENVENIDOS!"} />} />
					<Route path="/category/:categoryId" element={<ItemListContainer />} />
					<Route path="/item/:itemId" element={<ItemContainer />} />
					<Route path="*" element={<h1>404 NOT FOUND</h1>} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
