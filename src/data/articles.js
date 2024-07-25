import React from "react";

function article_1() {
	return {
		date: "2024 - Summer",
		title: "FUll STACK DEVELOPER :Protoss Technology  : Internship",
		description:
			`Developed a full-stack application using Next.js for the front end, Golang for the backend, and PostgreSQL for the database, enabling users to interact with a dynamic content management system. The front end design is crafted with Tailwind CSS and Material-UI (MUI). GitHub is used for code collaboration and version control, and AWS S3 is integrated for storage solutions.`,
		keywords: [
			"The Benefits of Cloud Computing",
			"Tharindu",
			"Tharindu N",
			"Tharindu Nayanajith",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">Internship with Protoss</div>
					{/* <img
						src="https://picsum.photos/200/300"
						alt="random"
						className="randImage"
					/> */}
				</div>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "2024 - Now",
		title: "FUll STACK DEVELOPER : Freelance : NPK ",
		description:
			`The project involves designing the front end using Tailwind CSS and Material-UI (MUI) for a modern, responsive user interface. The backend is developed in Golang, utilizing the Gin framework and GORM for database management. We use GitHub for code collaboration and version control. To deploy the project, we set up a Virtual Private Server (VPS). Additionally, Docker is used to ensure consistent environments across development, testing, and production.`,
		style: ``,
		keywords: [
			"Artificial Intelligence in Healthcare",
			"Tharindu",
			"Tharindu N",
			"Tharindu Nayanajith",
		],
		body: (
			<React.Fragment>
				<h1>Content of article 2</h1>
			</React.Fragment>
		),
	};
}

function article_3() {
	return {
		date: "2021 - Now",
		title: "KMUTNB : IT : Data Science",
		description:
			`I have studied various programming and development skills, including basic programming in C++ and JavaScript, problem-solving and game development with Python and PyGame, object-oriented programming with Java and GUI development with JFrame, web programming with PHP, and data visualization with Tableau. Additionally, I have experience in Convolutional Neural Network (CNN) classification using Python and mobile application development with Android Studio.
			`,
		style: ``,
		keywords: [
			"Artificial Intelligence in Healthcare",
			"Tharindu",
			"Tharindu N",
			"Tharindu Nayanajith",
		],
		body: (
			<React.Fragment>
				<h1>Content of article 2</h1>
			</React.Fragment>
		),
	};
}

function article_4() {
	return {
		date: "2021 - Now",
		title: "Mobile DEVELOPER : Freelance : CCP, R-Smart",
		description:
			`I developed a mobile application using Flutter and Dart, focusing on creating a seamless and user-friendly interface. The application includes various features to enhance user experience and ensure smooth functionality. After thorough testing and optimization, I successfully deployed the application to the Google Play Store, making it available for a wide audience to download and use.
			`,
		style: ``,
		keywords: [
			"Artificial Intelligence in Healthcare",
			"Tharindu",
			"Tharindu N",
			"Tharindu Nayanajith",
		],
		body: (
			<React.Fragment>
				<h1>Content of article 2</h1>
			</React.Fragment>
		),
	};
}
const myArticles = [article_1, article_2,article_3,article_4];

export default myArticles;
