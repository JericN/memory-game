import './App.css';
import SideBar from './Components/SideBar.js';
import Body from './Components/Body.js';
import { useState } from 'react';
function App() {
	const [level, setLevel] = useState('easy');
	const [dimension, setDimension] = useState([4, 2]);
	const [tries, setTries] = useState(0);
	const [timer, setTimer] = useState(0);
	const [preset, setPreset] = useState(false);

	return (
		<div className="home">
			<SideBar
				level={level}
				setLevel={setLevel}
				dimension={dimension}
				setDimension={setDimension}
				tries={tries}
				setTries={setTries}
				timer={timer}
				setTimer={setTimer}
				preset={preset}
				setPreset={setPreset}
			/>
			<Body level={level} dimension={dimension} tries={tries} timer={timer} />
		</div>
	);
}

export default App;
