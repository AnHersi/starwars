import styled from "styled-components";
import { Starship } from "../types.ts";

type Props = {
	starship: Starship;
};

const Card = styled.div`
	background-color: #19182b;
	width: 40vw;
	height: 300px;
`;

const StarshipCard = ({ starship }: Props) => {
	return <Card>{starship.name}</Card>;
};

export default StarshipCard;
