import { useEffect, useState } from "react";
import styled from "styled-components";
import { useQuery } from "react-query";
import { getStarships } from "../services/starship";
import StarshipCard from "./StarshipCard";
import { Starship } from "../types";

const GridContainer = styled.div`
	display: grid;
	position: relative;
	justify-items: center;
	align-items: center;
	grid-template-columns: repeat(2, 1fr);
	margin-top: 110vh;
	grid-row-gap: 5rem;
	width: 90vw;
	left: 50%;
	transform: translateX(-50%);

	@media (max-width: 768px) {
		grid-template-columns: repeat(1, 1fr);
	}
`;

const StarshipList = () => {
	const { data } = useQuery("starships", getStarships);

	const [mostFilms, setMostFilms] = useState<Starship | undefined>(undefined);

	const getStarshipWithMostFilms = (): Starship | undefined => {
		return data?.reduce((acc, starship) => {
			return starship.films.length > acc.films.length ? starship : acc;
		});
	};

	useEffect(() => {
		setMostFilms(getStarshipWithMostFilms());
	}, [data]);

	return (
		<>
			<GridContainer>
				{data?.map((starship, index) => (
					<StarshipCard key={index} starship={starship} mostFilms={mostFilms} />
				))}
			</GridContainer>
		</>
	);
};

export default StarshipList;
