import React from "react";
import CircularLoading from "respinner/lib/circular";

import styles from "./Loader.scss";

const Loader = ({ color = "#4197ff" }) => (
	<div styleName="container" aria-label="loader">
		<CircularLoading className={styles.loader} stroke={color} />
	</div>
);

export default Loader;
