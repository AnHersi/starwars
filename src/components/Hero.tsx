import heroImage from "../assets/hero-image.png";
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

	@media (max-width: 500px) {
		font-size: 15vw;
		transform: translate(-50%, -100%);
	}
`;

const HeroImage = () => {
	return (
		<>
			<Img src={heroImage} alt="hero image" />
			<Heading>STAR WARS</Heading>
		</>
	);
};

export default HeroImage;
