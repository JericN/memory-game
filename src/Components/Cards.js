import './Card.css';
import { useState, useEffect } from 'react';
import card_back from '../Images/pokeball_green.png';
import { useGlobalState } from '../store/GlobalStateProvider';

const Pokemon = () => {
	const [state, dispatch] = useGlobalState();

	const [pause, setPause] = useState(false);
	const [flip, setFlip] = useState([]);

	const col = state.dimension[0];
	const row = state.dimension[1];
	const list = state.card_id;

	useEffect(() => {
		if (flip.length === 2) {
			setTimeout(() => setFlip([]), 1000);
			setPause(true);
			setTimeout(() => setPause(false), 1000);
			if (list[flip[0]] === list[flip[1]]) {
				dispatch({
					type: 'SET_CARD_STATE',
					item: flippedCard(),
				});
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
		if (!pause && !flip.includes(index)) {
			setFlip((cards) => [...cards, index]);
		}
	};

	const cardSizeStyle = {
		width: `calc(100% / ${col + 0.1})`,
		height: `calc(100% / ${row + 0.1})`,
	};

	const cardBorderStyle = {
		border: `solid #1a1f18 calc(6px - 0.5px * ${row})`,
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
							className="card"
							onClick={() => cardFlip(index)}
						>
							<div className={`card__container ${doFlip ? 'card__flip' : ''}`}>
								<div className="card__front" style={cardBorderStyle}>
									<img className="card__image" id={id} src={src} alt="pokemon" />
								</div>
								<div className="card__back" style={cardBorderStyle}>
									<img
										className="card__image"
										id={id}
										src={card_back}
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
