import React from "react";
import "./card.component.css";

export const Card = (props) => (
	<div className="card-container">
		<img
			alt="monster"
			src={`https://robohash.org/${props.monster.id}?set=set2&50x50`}
		/>
		<h1>{props.monster.name} </h1>
		<h2>{props.monster.email}</h2>
	</div>
);
