import React from "react";

import "./Widget.css";

export default function Widget(props) {
	const { children } = props;

	return <div className="widget">{children}</div>;
}
