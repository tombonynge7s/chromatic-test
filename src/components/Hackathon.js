import React from "react";

import "./Hackathon.css";

function Hackathon(props) {
	const { children } = props;
	return (
		<div className="hackathon">
			<div className="icon"></div>
			<span className="text">{children}</span>
		</div>
	);
}

export default React.memo(Hackathon);
