import './Body.css';
import React from 'react';
import Card from './Cards.js';

function getCardList(col, row) {
	let arr = Array((col * row) / 2).fill(1);
	for (let i in arr) {
		do {
			var num = Math.floor(Math.random() * 700 + 100);
		} while (arr.includes(num));
		arr[i] = num;
	}
	arr = arr.concat(arr);
	arr.sort(() => Math.random() - 0.5);
	return arr;
}

export default function Body({ dimension, tries, timer }) {
	let col = dimension[0];
	let row = dimension[1];
	var list = getCardList(col, row);
	return (
		<div className="body">
			<div className="body__container">
				<Card col={col} row={row} list={list} />
			</div>
		</div>
	);
}
