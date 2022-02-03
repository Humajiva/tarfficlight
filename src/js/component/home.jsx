import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export const Home = () => {
	const [color, setColor] = useState("green");
	return (
		<div className="trafficLight">
			<div
				className={color == "yellow" ? "yellow-glow" : "yellow"}
				onClick={() => setColor("red")}>
				{" "}
			</div>
			<div
				className={color == "green" ? "green-glow" : "green"}
				onClick={() => setColor("yellow")}></div>
			<div
				className={color == "red" ? "red-glow" : "red"}
				onClick={() => setColor("green")}></div>
		</div>
	);
};
