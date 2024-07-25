import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Skill"
				body={
					<div className=" mb-4">
						<div className="flex flex-wrap">
						<img
								src="./cpp_logo.png"
								alt="c++"
								className="work-image "
							/>
							<img
								src="./java_logo.png"
								alt="java"
								className="work-image ml-5 mb-4"
							/>
							<img
								src="./python_logo.png"
								alt="python"
								className="work-image ml-5"
							/>
							<img
								src="./php_logo.png"
								alt="facebook"
								className="work-image ml-5"
							/>
							<img
								src="./js_logo.png"
								alt="facebook"
								className="work-image ml-5"
							/>
							<img
								src="./ts_logo.png"
								alt="facebook"
								className="work-image ml-5"
							/>
							<img
								src="./go_logo.png"
								alt="facebook"
								className="work-image ml-5"
							/>
							<img
								src="./kotlin.jpg"
								alt="facebook"
								className="work-image "
							/>
							<img
								src="./sql_logo.png"
								alt="facebook"
								className="work-image ml-5"
							/>
							<img
								src="./git_logo.png"
								alt="facebook"
								className="work-image ml-5"
							/>
							
						</div>
					</div>
					// <div className="works-body">
					// 	<div className="work">
					// 		<img
					// 			src="./cpp_logo.png"
					// 			alt="facebook"
					// 			className="work-image"
					// 		/>
							
					// 		<div className="work-title">C++</div>
							
					// 		<div className="work-subtitle">
					// 			Golang
					// 		</div>
					// 		<div className="work-duration">
					// 		<img
					// 			src="./twitter.png"
					// 			alt="twitter"
					// 			className="work-image"
					// 		/>
					// 		</div>
							
					// 	</div>

					// 	<div className="work">
					// 		<img
					// 			src="./twitter.png"
					// 			alt="twitter"
					// 			className="work-image"
					// 		/>
					// 		<div className="work-title">Twitter</div>
					// 		<div className="work-subtitle">
					// 			Software Engineer
					// 		</div>
					// 		<div className="work-duration">2019 - Present</div>
					// 	</div>
					// </div>
				}
			/>
		</div>
	);
};

export default Works;
