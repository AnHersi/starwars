import styled from "styled-components";
import { motion } from "framer-motion";

export const Card = styled.div`
	background-color: #19182b;
	width: 90vw;
	height: 70vh;
	border-radius: 7px;
	margin: 2rem auto;
	@media screen and (min-width: 768px) {
		width: 50vw;
		height: 70vh;
	}
	@media screen and (min-width: 1024px) {
		width: 40vw;
		height: 57vh;
	}

	@media screen and (min-width: 1440px) {
		width: 40vw;
		height: 57vh;
	}
`;

export const Header = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0rem 0rem 0rem 2.5rem;
	height: 30%;
`;

export const Title = styled.h1`
	font-size: 2rem;
	color: #fff;
	font-family: "Inter";
	font-weight: bold;
	max-width: 60%;
	text-align: left;

	@media screen and (min-width: 1440px) {
		font-size: 2rem;
	}

	@media screen and (min-width: 1920px) {
		font-size: 3rem;
	}
`;

export const Body = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	height: 70%;
`;

export const InfoList = styled.div`
	display: flex;
    position relative;
	flex-direction: row;
	padding-left: 2.5rem;
	justify-content: evenly;
	align-items: start;
`;

export const Info = styled.div`
	display: flex;
	flex-direction: column;
	text-align: left;
	width: 30%;
`;

export const InfoLabel = styled.span`
	color: #fff;
	font-size: 1rem;
	font-family: "Inter";
	font-weight: 200;
`;

export const InfoText = styled.span`
	color: #fff;
	font-size: 1.2rem;
	font-family: "Inter";
	font-weight: 500;
	margin-top: 1.5rem;
`;

export const Divider = styled.div`
	width: 0.3rem;
	height: 5.5rem;
	background-color: #0a092e;
	border-radius: 10px;
	margin: 0px 1rem;
`;

export const MoreInfo = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	height: 30%;
	padding: 0.5rem 2.5rem;
`;

export const Cost = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	font-size: 2rem;
	font-family: "Inter";
	font-weight: 400;
	color: #fff;

	@media screen and (max-width: 768px) {
		font-size: 1.5rem;
		margin-right: 2.5rem;
	}
`;

export const Credits = styled.svg`
	color: #fff;
	width: 4rem;
	height: 4rem;

	@media screen and (max-width: 768px) {
		width: 3rem;
		height: 3rem;
	}
`;

export const Rating = styled.div`
	display: flex;
	flex-direction: column;
`;

export const RatingLabel = styled.span`
	color: #fff;
	font-size: 1rem;
	font-family: "Inter";
	font-weight: 200;
	margin-bottom: 0.5rem;
`;

export const RatingText = styled.span`
	color: #fff;
	font-size: 4rem;
	font-family: "Inter";
	font-weight: 500;
`;

export const Buttons = styled.div`
	display: flex;
	justify-content: end;
	align-items: center;
	width: 40%;
	height: 100%;
	padding-right: 2.5rem;

	@media screen and (max-width: 1024px) {
		width: 50%;
		flex-direction: column;
		justify-content: center;
		padding-right: 0;
		align-items: center;
	}
`;

export const MostFilms = styled(motion.div)`
	display: flex;
	justify-content: space-around;
	align-items: center;
	background-color: #edba37;
	border-radius: 7px;
	border-style: none;
	font-family: Inter;
	font-size: 0.7rem;
	font-weight: 700;
	width: 45%;
	height: 30%;
	padding: 0rem 0.3rem;
	box-sizing: border-box;

	@media screen and (max-width: 1024px) {
		width: 6rem;
		box-sizing: border-box;
		font-size: 0.65rem;
	}

	@media screen and (min-width: 1700px) {
		font-size: 0.9rem;
	}
`;

export const Wiki = styled.a`
	display: flex;
	justify-content: space-around;
	padding: 0rem 1.2rem;
	margin-left: 0.7rem;
	align-items: center;
	background-color: #b24b25;
	border-radius: 7px;
	border-style: none;
	font-family: Inter;
	font-weight: 700;
	font-size: 0.8rem;
	width: 27%;
	height: 30%;
	text-decoration: none;
	color: black;

	&:hover {
		transform: scale(1.075);
		transition: all 0.2s ease-in-out;
	}

	@media screen and (max-width: 1024px) {
		margin: 0.5rem 0rem;
		width: 6rem;
		box-sizing: border-box;
	}

	@media screen and (min-width: 1700px) {
		font-size: 1rem;
		width: 25%;
	}
`;

export const WikiLogo = styled.img`
	height: 16px;
	width: 16px;
`;
