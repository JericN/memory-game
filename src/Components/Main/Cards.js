import './Card.css';
import { useState, useEffect } from 'react';
import { useGlobalState } from '../../State/GlobalStateProvider';
import ball_summer from '../../Images/pokeball_orange.png';
import ball_winter from '../../Images/pokeball_blue.png';
import ball_spring from '../../Images/pokeball_green.png';

const Cards = () => {
	const [state, dispatch] = useGlobalState();
	const [pause, setPause] = useState(false);
	const [flip, setFlip] = useState([]);
	const [pokeball] = useState({
		summer: ball_summer,
		spring: ball_spring,
		winter: ball_winter,
	});

	const card_count = state.count;
	const list = state.card_id;

	useEffect(() => {
		if (flip.length === 2) {
			dispatch({
				type: 'SET_TRIES',
				item: state.tries + 1,
			});
			setPause(true);
			let timer = setTimeout(() => setPause(false), 1000);
			if (list[flip[0]] === list[flip[1]]) {
				clearTimeout(timer);
				setTimeout(() => setPause(false), 200);
				setFlip([]);
				dispatch({
					type: 'SET_CARD_STATE',
					item: flippedCard(),
				});
			} else {
				setTimeout(() => setFlip([]), 1000);
			}
		}
	}, [flip]);

	useEffect(() => {
		setFlip([]);
	}, [state.presetWindow]);

	const flippedCard = () => {
		return state.card_state.map((card, index) => {
			if (card) return true;
			let turn = false;
			flip.forEach((target) => {
				if (index === target) {
					turn = true;
				}
			});
			return turn;
		});
	};

	const cardFlip = (index) => {
		if (!state.presetWindow && !pause && !flip.includes(index) && !state.card_state[index]) {
			setFlip((cards) => [...cards, index]);
		}
	};

	const cardBorder = {
		border: `solid #000000d2 calc(6px - 0.5px * ${state.dimension[1]})`,
	};

	return Array(card_count)
		.fill()
		.map((element, index) => {
			const id = `card__${index}`;
			const src = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${list[index]}.png`;

			var doFlip = false;
			if (state.card_state[index] || flip.includes(index)) {
				doFlip = true;
			}

			return (
				<div
					id={id}
					className={`card ${state.playing ? '' : 'move'}`}
					onClick={() => cardFlip(index)}
				>
					<div className={`card__container  ${doFlip ? 'card__flip' : ''}`}>
						<div className="card__front" style={cardBorder}>
							<img className="card__image" id={id} src={src} alt="pokemon" />
						</div>
						<div className="card__back" style={cardBorder}>
							<img
								className="card__image"
								id={id}
								src={pokeball[state.theme]}
								alt="pokemon"
							/>
						</div>
					</div>
				</div>
			);
		});
};

export default Cards;
