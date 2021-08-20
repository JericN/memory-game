import './Card.css';
import theme from '../Data/theme.json';
import { useState, useEffect } from 'react';
import { useGlobalState } from '../State/GlobalStateProvider';

const Pokemon = () => {
	const [state, dispatch] = useGlobalState();
	const [pause, setPause] = useState(false);
	const [flip, setFlip] = useState([]);

	const col = state.dimension[0];
	const row = state.dimension[1];
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

	const cardSizeStyle = {
		width: `calc(100% / ${col + 0.1})`,
		height: `calc(100% / ${row + 0.1})`,
	};

	const cardColorFront = {
		border: `solid #000000d2 calc(6px - 0.5px * ${row})`,
		// backgroundImage: theme[state.theme].card_front,
	};

	const cardColorBack = {
		border: `solid #000000d2 calc(6px - 0.5px * ${row})`,
		// backgroundImage: theme[state.theme].card_back,
	};

	return Array(row)
		.fill()
		.map((elr, r) => {
			return Array(col)
				.fill()
				.map((elc, c) => {
					const index = r * col + c;
					const id = `card__${index}`;
					var doFlip = false;
					if (state.card_state[index] || flip.includes(index)) {
						doFlip = true;
					}
					const src = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${list[index]}.png`;
					return (
						<div
							id={id}
							style={cardSizeStyle}
							className={`card ${state.playing ? '' : 'move'}`}
							onClick={() => cardFlip(index)}
						>
							<div className={`card__container  ${doFlip ? 'card__flip' : ''}`}>
								<div className="card__front" style={cardColorFront}>
									<img className="card__image" id={id} src={src} alt="pokemon" />
								</div>
								<div className="card__back" style={cardColorBack}>
									<img
										className="card__image"
										id={id}
										src={
											require(`../Images/${theme[state.theme].body_ball}`)
												.default
										}
										alt="pokemon"
									/>
								</div>
							</div>
						</div>
					);
				});
		});
};

export default Pokemon;
