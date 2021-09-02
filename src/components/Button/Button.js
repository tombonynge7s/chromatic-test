import React from "react";
import classNames from "classnames";

import Loader from "./Loader";

import "./Button.scss";

function Button(props) {
	const {
		children,
		size = "medium",
		intent = "primary",
		icon: Icon,
		isLoading,
		disabled,
		name,
		...buttonProps
	} = props;

	const styleName = classNames("button", size, intent, {
		loading: isLoading,
		"has-icon": !!Icon,
	});
	const buttonName = name || "";

	return (
		<button
			styleName={styleName}
			disabled={disabled || isLoading}
			name={buttonName}
			{...buttonProps}
		>
			{isLoading && (
				<span styleName="loader">
					<Loader color="#ffffff" />
				</span>
			)}
			{Icon && <Icon styleName="icon" />}
			<span styleName="text">
				<Locale>{children}</Locale>
			</span>
		</button>
	);
}

export default React.memo(Button);
