import './Card.css';
import { useState } from 'react';
import card_back from '../Images/pokeball.png';

const Pokemon = ({ col, row, list }) => {
	const [side, setSide] = useState(Array(col * row).fill(false));
	const [click, setClick] = useState(0);
	const [pair, setPair] = useState([-1, -1]);
	col = Array(col).fill();
	row = Array(row).fill();

	const flip = (pos) => {
		const newPair = () => {
			setSide(
				side.map((state, index) => {
					if (index === pair[0] || index === pair[1]) {
						if (list[pair[0]] === list[pair[1]]) {
							return true;
						} else {
							return false;
						}
					}
					return state;
				})
			);
			setPair(
				pair.map(() => {
					return -1;
				})
			);
		};
		setSide(
			side.map((state, index) => {
				if (index === pos) {
					setPair(
						pair.map((el, index) => {
							if (index === click) {
								return pos;
							}
							return el;
						})
					);
					return true;
				}
				return state;
			})
		);
		setClick((click) => {
			if (click < 2) {
				return click + 1;
			} else {
				newPair();
				return 0;
			}
		});
		console.log(click);
	};
	return row.map((elr, r) => {
		return (
			<tr key={r}>
				{col.map((elc, c) => {
					const pos = r * col.length + c;
					const id = `card-${pos}`;
					const src = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${list[pos]}.png`;
					return (
						<td key={c} className="card" onClick={() => flip(pos)}>
							<GenerateCard id={id} src={src} state={side[pos]} />
						</td>
					);
				})}
			</tr>
		);
	});
};

function GenerateCard({ id, src, state }) {
	return (
		<div className={`card__container ${state ? 'card__flip' : ''}`}>
			<div className="card__front">
				<img className="card__image" id={id} src={src} alt="pokemon" />
			</div>
			<div className="card__back">
				<img className="card__image" id={id} src={card_back} alt="pokemon" />
			</div>
		</div>
	);
}

export default Pokemon;
