import Home from './Components/Home';
import NavBar from './Components/NavBar';
import Send from './Components/Send';
import Receive from './Components/Recieve';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from './Components/NotFound';
import AdsComponent from './Components/AdSense/AdsComponent'; //Google Adsense Component

function App() {
	return (
		<Router>
			<div className='App'>
				<NavBar />
				<AdsComponent dataAdSlot='8540460334' />
				<Routes>
					<Route path='/' exact element={<Home />} />
					<Route path='/send' exact element={<Send />} />
					<Route path='/download' element={<Receive />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;

