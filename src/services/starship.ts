import axios from "axios";
import { Starship } from "../types.ts";

export const getStarships = async (): Promise<Starship[]> => {
	const starships = [];
	let url = "https://swapi.dev/api/starships/";

	while (starships.length < 100 && url) {
		const response = await axios.get(url);
		starships.push(...response.data.results);
		url = response.data.next;
	}

	const sortedStarships = starships
		.filter((starship) => starship.crew <= 10)
		.sort((a, b) => a.crew - b.crew);

	return sortedStarships;
};
