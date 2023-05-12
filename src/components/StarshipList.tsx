import { useEffect } from "react";
import styled from "styled-components";
import { useQuery } from "react-query";
import { getStarships } from "../services/starship";
import StarshipCard from "./StarshipCard";

const GridContainer = styled.div`
	display: grid;
	position: absolute;
	justify-items: center;
	align-items: center;
	grid-template-columns: repeat(2, 1fr); // 2 columns on medium screens
	margin-top: 100vh;
	grid-row-gap: 5rem;
	width: 100vw;
	left: 0px;

	@media (min-width: 2000px) {
		// extra large screens
		grid-template-columns: repeat(3, 1fr);
	}

	@media (max-width: 768px) {
		// small screens
		grid-template-columns: repeat(1, 1fr);
	}
`;

const StarshipList = () => {
	const { data } = useQuery("starships", getStarships);

	useEffect(() => {
		console.log(data);
	}, [data]);

	return (
		<>
			<GridContainer>
				{data?.map((starship, index) => (
					<StarshipCard key={index} starship={starship} />
				))}
			</GridContainer>
		</>
	);
};

export default StarshipList;
