import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Framwork = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Frameworks"
				body={
					<div className=" mb-4">
						<div className="flex flex-wrap">
						<img
								src="./flutter_logo.png"
								alt="c++"
								className="work-image "
							/>
							<img
								src="./react_logo.png"
								alt="java"
								className="work-image ml-5 mb-4"
							/>
							<img
								src="./nextjs_logo.jpeg"
								alt="python"
								className="work-image ml-5"
							/>
							<img
								src="./spring.svg"
								alt="facebook"
								className="work-image ml-5"
							/>
							<img
								src="./tail_logo.png"
								alt="facebook"
								className="work-image ml-5"
							/>
							<img
								src="./docker_logo.png"
								alt="facebook"
								className="work-image ml-5"
							/>
							<img
								src="./aws_logo.png"
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

export default Framwork;
