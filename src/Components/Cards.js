import './Card.css';
import { useState, useEffect } from 'react';
import card_back from '../Images/pokeball_green.png';

const Pokemon = ({ col, row, list }) => {
	const [pause, setPause] = useState(false);
	const [flip, setFlip] = useState([]);
	const [flipped, setFlipped] = useState([]);

	useEffect(() => {
		if (flip.length === 2) {
			const first = list[flip[0]];
			const second = list[flip[1]];
			setTimeout(() => setFlip([]), 1000);
			setPause(true);
			setTimeout(() => setPause(false), 1000);
			if (first === second) {
				setFlipped((cards) => [...cards, flip[0], flip[1]]);
			}
		}
		if (flipped.length === col * row) {
			alert('Congrats!');
			console.log('Congrats');
		}
		console.log(flipped.length + ' ' + col * row);
	}, [flip]);

	const cardFlip = (index) => {
		if (!pause && !flip.includes(index)) {
			setFlip((cards) => [...cards, index]);
		}
	};

	return Array(row)
		.fill()
		.map((elr, r) => {
			return Array(col)
				.fill()
				.map((elc, c) => {
					const index = r * col + c;
					const id = `card-${index}`;
					var doFlip = flip.includes(index) ? true : false;
					if (flipped.includes(index)) {
						doFlip = true;
					}
					const src = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${list[index]}.png`;
					return (
						<div className="card" onClick={() => cardFlip(index)}>
							<div className={`card__container ${doFlip ? 'card__flip' : ''}`}>
								<div className="card__front">
									<img className="card__image" id={id} src={src} alt="pokemon" />
								</div>
								<div className="card__back">
									<img className="card__image" id={id} src={card_back} alt="pokemon" />
								</div>
							</div>
						</div>
					);
				});
		});
};

export default Pokemon;
