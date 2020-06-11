import React, { Component } from "react";
import { CardList } from "./componets/card-list/card-list.component";
import searchBox from "./componets/search-box/search-box.component";
import "./App.css";
import SearchBox from "./componets/search-box/search-box.component";

class App extends Component {
	constructor() {
		super();

		this.state = {
			monsters: [],
			searchField: "",
		};
	}

	//  life cycle method.
	/*  componentDidMount() is invoked immediately after a component 
		is mounted (inserted into the tree).
	 	Initialization that requires DOM nodes should go here. 
	 	If you need to load data from a remote endpoint, this is 
	 	a good place to instantiate the network request. */

	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/users") //fetch() returns a promise.
			.then((response) => response.json()) //taking the response(promise) and converting it into a json formate.
			.then((users) => this.setState({ monsters: users })); //taking that json and setting the array monsters.
	}

	handleChange = (e) => {
		this.setState({ searchField: e.target.value });
	};

	render() {
		const { monsters, searchField } = this.state;
		const filteredMonster = monsters.filter((monster) =>
			monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
		);
		return (
			<div className="App">
				<h1>Monster Roladex</h1>
				<SearchBox placeholder="Search Monster" onPressed={this.handleChange} />

				<CardList monsters={filteredMonster} />
			</div>
		);
	}
}

export default App;
