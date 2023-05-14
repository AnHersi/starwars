import { Starship } from "../types.ts";
import wikiLogo from "../assets/wiki-logo.webp";
import { useInView, useAnimation } from "framer-motion";
import {
	Card,
	Header,
	Title,
	Body,
	Info,
	InfoList,
	InfoLabel,
	InfoText,
	Divider,
	MoreInfo,
	Cost,
	Credits,
	RatingLabel,
	Rating,
	RatingText,
	Buttons,
	MostFilms,
	Wiki,
	WikiLogo,
} from "../styles/StarshipCard.ts";
import { useEffect, useRef } from "react";

type Props = {
	starship: Starship;
	mostFilms: Starship | undefined;
};

const StarshipCard = ({ starship, mostFilms }: Props) => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	const controls = useAnimation();

	useEffect(() => {
		if (isInView) {
			controls.start("visible");
		}
	}, [isInView]);

	return (
		<Card>
			<Header>
				<Title>{starship.name}</Title>
				<Buttons ref={ref}>
					{starship.name == mostFilms?.name ? (
						<MostFilms
							variants={{
								hidden: { opacity: 0, y: 30 },
								visible: {
									opacity: 1,
									y: 0,
									transition: {
										type: "spring",
										stiffness: 300,
										damping: 10,
										duration: 1,
										delay: 0.75,
									},
								},
							}}
							initial="hidden"
							animate={controls}
						>
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
								<path
									fill="currentColor"
									d="m15.35 20l-1.95 1.925q-.575.575-1.4.575t-1.4-.575L8.65 20H6q-.825 0-1.413-.588T4 18v-2.65L2.075 13.4Q1.5 12.825 1.5 12t.575-1.4L4 8.65V6q0-.825.588-1.413T6 4h2.65l1.95-1.925Q11.175 1.5 12 1.5t1.4.575L15.35 4H18q.825 0 1.413.588T20 6v2.65l1.925 1.95q.575.575.575 1.4t-.575 1.4L20 15.35V18q0 .825-.588 1.413T18 20h-2.65ZM12 14.475l1.925 1.15q.275.175.537-.012t.188-.513l-.5-2.175l1.7-1.475q.25-.225.15-.537t-.45-.338l-2.225-.175l-.875-2.075q-.125-.3-.45-.3t-.45.3l-.875 2.075l-2.225.175q-.35.025-.45.338t.15.537l1.7 1.475l-.5 2.175q-.075.325.188.513t.537.012L12 14.475Z"
								/>
							</svg>
							<span>Most Films</span>
						</MostFilms>
					) : null}
					<Wiki href={`https://starwars.fandom.com/wiki/${starship.model}`} target="_blank">
						<WikiLogo src={wikiLogo} alt="wiki logo" />
						Wiki
					</Wiki>
				</Buttons>
			</Header>
			<Body>
				<InfoList>
					<Info>
						<InfoLabel>Model</InfoLabel>
						<InfoText>{starship.model}</InfoText>
					</Info>
					<Divider />
					<Info>
						<InfoLabel>Number of films</InfoLabel>
						<InfoText>{starship.films.length}</InfoText>
					</Info>
					<Divider />
					<Info>
						<InfoLabel>Crew size</InfoLabel>
						<InfoText>{starship.crew}</InfoText>
					</Info>
				</InfoList>
				<MoreInfo>
					<Cost>
						<Credits viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
							<path
								fill="#fff"
								opacity="1.000000"
								stroke="none"
								d="M 76.579 179.738 C 76.579 159.536 76.579 139.333 76.901 118.801 C 84.904 118.471 92.585 118.471 100.553 118.471 C 100.553 92.932 100.553 68.027 100.553 43.121 C 111.755 43.121 122.957 43.121 134.48 43.451 C 134.801 68.566 134.801 93.35 134.801 118.192 C 145.343 118.192 155.3 118.192 165.624 118.192 C 165.624 92.983 165.624 68.052 165.624 43.121 C 176.826 43.121 188.028 43.121 199.55 43.451 C 199.872 68.577 199.872 93.374 199.872 118.471 C 273.344 118.471 346.202 118.471 419.059 118.471 C 419.059 118.784 419.059 119.097 418.843 119.734 C 414.218 125.364 409.773 130.639 405.405 135.981 C 400.238 142.299 395.174 148.706 390.001 155.019 C 383.366 163.118 376.637 171.136 370.005 179.24 C 363.308 187.424 356.698 195.686 350.015 203.883 C 343.69 211.641 337.292 219.335 330.977 227.101 C 323.29 236.555 315.695 246.091 307.987 255.528 C 301.363 263.637 294.582 271.612 287.97 279.732 C 279.186 290.518 270.547 301.428 261.755 312.207 C 253.902 321.837 245.87 331.314 238.017 340.944 C 229.226 351.723 220.574 362.623 211.81 373.426 C 203.986 383.071 196.091 392.657 188.227 402.268 C 164.24 402.268 140.252 402.268 115.961 402.018 C 116.454 400.516 117.137 399.169 118.064 398.031 C 124.455 390.178 130.929 382.394 137.317 374.538 C 144.932 365.172 152.448 355.719 160.085 346.372 C 166.784 338.173 173.643 330.111 180.34 321.91 C 188.048 312.472 195.624 302.919 203.317 293.468 C 209.784 285.526 216.361 277.679 222.847 269.753 C 230.93 259.876 238.958 249.951 247.028 240.061 C 252.266 233.642 257.552 227.263 262.785 220.84 C 268.159 214.245 273.488 207.614 278.849 201.007 C 284.133 194.495 289.43 187.995 295.301 180.779 C 293.277 180.362 291.76 179.781 290.242 179.778 C 261.491 179.723 232.739 179.736 203.987 179.745 C 202.765 179.746 201.541 179.857 199.772 179.942 C 199.772 205.077 199.772 229.959 199.772 255.053 C 188.04 255.053 176.868 255.053 165.672 254.726 C 165.639 251.946 165.628 249.493 165.625 247.039 C 165.586 225.545 165.548 204.05 165.545 182.259 C 165.885 179.521 164.225 179.742 162.731 179.741 C 156.235 179.74 149.738 179.738 143.241 179.738 C 140.549 179.738 137.857 179.738 134.767 179.738 C 134.767 205.06 134.767 229.837 134.767 255.048 C 123.112 255.048 111.867 255.048 100.598 254.722 C 100.567 251.942 100.558 249.489 100.553 247.035 C 100.514 225.542 100.477 204.048 100.473 182.258 C 100.812 179.542 99.176 179.74 97.68 179.74 C 90.646 179.741 83.613 179.739 76.579 179.738 Z"
							/>
						</Credits>
						{isNaN(parseInt(starship.cost_in_credits))
							? starship.cost_in_credits
							: parseInt(starship.cost_in_credits).toLocaleString()}
					</Cost>
					<Rating>
						<RatingLabel>Hyperdrive Rating</RatingLabel>
						<RatingText>{starship.hyperdrive_rating}</RatingText>
					</Rating>
				</MoreInfo>
			</Body>
		</Card>
	);
};

export default StarshipCard;
