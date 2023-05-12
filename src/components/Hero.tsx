import heroImage from "../assets/mando-transformed.png";
import styled from "styled-components";

const Img = styled.img`
	width: 100vw;
	height: 100vh;
	object-fit: cover;
	position: absolute;
	top: 0px;
	left: 0px;
`;

const Heading = styled.h1`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -125%);
	font-size: 7vw;
	color: #151430;
	font-family: "Star Jedi";
`;

const HeroImage = () => {
	return (
		<>
			<Img src={heroImage} alt="background" />
			<Heading>STAR WARS</Heading>
		</>
	);
};

export default HeroImage;
