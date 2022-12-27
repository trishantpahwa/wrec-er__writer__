import './App.css';
import {
	BrowserRouter as Router,
	Routes,
	Route
} from "react-router-dom";

import { BlogEditor } from './components';
import { BlogLister } from './components';

function App() {

	return (
		<div className="App">
			<header className="App-header">
				<Router>
					<Routes>
						<Route exact path="/" element={<BlogLister />} />
						<Route path="/edit/:id" element={<BlogEditor />} />
					</Routes>
				</Router>
			</header>
		</div>
	);
}

export default App;
