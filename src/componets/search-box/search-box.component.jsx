import React from "react";

import "./search-box.css";

const SearchBox = (props) => (
	<input
		className="search"
		type="search"
		placeholder={props.placeholder}
		onChange={props.onPressed}
	/>
);

export default SearchBox;
