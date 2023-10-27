import Home from './Components/Home';
import NavBar from './Components/NavBar';
import Send from './Components/Send';
import Receive from './Components/Recieve';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import NotFound from './Components/NotFound';
import AdsComponent from './Components/AdSense/AdsComponent'; //Google Adsense Component

function App() {
	return (
		<BrowserRouter>
			<div className='App'>
				<NavBar />
				<AdsComponent dataAdSlot='8540460334' />
				<Routes>
					<Route path='/' exact element={<Home />} />
					<Route path='/send' exact element={<Send />} />
					<Route path='/download' element={<Receive />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
				<alanBtn key='460d9e4985338b4573109176515f7b9e2e956eca572e1d8b807a3e2338fdd0dc/stage' />
			</div>
		</BrowserRouter>
	);
}

export default App;

