import './Body.css';
import React from 'react';
import Card from './Cards.js';

function getCardList(col, row) {
	let arr = Array((col * row) / 2).fill(1);
	for (let i in arr) {
		do {
			var num = Math.floor(Math.random() * 50 + 100);
		} while (arr.includes(num));
		arr[i] = num;
	}
	arr = arr.concat(arr);
	arr.sort(() => Math.random() - 0.5);
	return arr;
}

export default function Body({ col = 8, row = 5 }) {
	var list = getCardList(col, row);
	return (
		<div className="body">
			<div className="body__container">
				<table className="field">
					<tbody>
						<Card col={col} row={row} list={list} />
					</tbody>
				</table>
			</div>
		</div>
	);
}
