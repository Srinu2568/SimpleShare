import Home from './Components/Home';
import NavBar from './Components/NavBar';
import Send from './Components/Send';
import Receive from './Components/Recieve';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
	return (
		<Router>
			<div className='App'>
				<NavBar />
				<Routes>
					<Route path='/' exact element={<Home />} />
					<Route path='/send' element={<Send />} />
					<Route path='/download' element={<Receive />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;

