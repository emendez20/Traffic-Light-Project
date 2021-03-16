import React, { useState } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

// let color = {
// 	style:
// 		"borderRadius: 50%; boxShadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #304701 0 -1px 9px yellow 0 2px 12px;",
// };
export function TrafficLight() {
	const [color, setColor] = useState("blue");

	return (
		<div id="traffic-light">
			<div
				onClick={() => setColor(["red", "color2", "color3"])}
				type="radio"
				name="traffic-light-color"
				id="color1"
				value="color1"
				className={color[0]}></div>
			<div
				onClick={() => setColor(["color1", "yellow", "color3"])}
				type="radio"
				name="traffic-light-color"
				id="color2"
				value="color2"
				className={color[1]}></div>
			<div
				onClick={() => setColor(["color1", "color2", "green"])}
				type="radio"
				name="traffic-light-color"
				id="color3"
				value="color3"
				className={color[2]}></div>
		</div>
	);
	// return (
	// 	<div id="traffic-light">
	// 		<input
	// 			onClick={() => setColor("selected")}
	// 			type="radio"
	// 			name="traffic-light-color"
	// 			id="color1"
	// 			value="color1"
	// 			className={color}
	// 		/>
	// 		<input
	// 			onClick={() => setColor("selected")}
	// 			type="radio"
	// 			name="traffic-light-color"
	// 			id="color2"
	// 			value="color2"
	// 			className={color}
	// 		/>
	// 		<input
	// 			onClick={() => setColor("selected")}
	// 			type="radio"
	// 			name="traffic-light-color"
	// 			id="color3"
	// 			value="color3"
	// 			className={color}
	// 		/>
	// 	</div>
	// );
}
