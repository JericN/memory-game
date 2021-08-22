import SideBar from './Components/SideBar.js';
import Body from './Components/Body.js';
import theme from './Data/theme.json';
import './App.css';
import { useGlobalState } from './State/GlobalStateProvider.js';

function App() {
	const [state] = useGlobalState();

	const set_theme = () => {
		document.documentElement.style.setProperty('--font_color', theme[state.theme].font_color);
		document.documentElement.style.setProperty('--body_bg', theme[state.theme].body_bg);
		document.documentElement.style.setProperty('--side_bg', theme[state.theme].side_bg);
		document.documentElement.style.setProperty('--side_button', theme[state.theme].side_button);
		document.documentElement.style.setProperty('--card_back', theme[state.theme].card_back);
		document.documentElement.style.setProperty('--card_front', theme[state.theme].card_front);
	};
	set_theme();

	return (
		<div className="home">
			<SideBar />
			<Body />
		</div>
	);
}

export default App;
