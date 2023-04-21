import { Card, CardBody, Text, Image, Heading } from "@chakra-ui/react";

import { Game } from "../hooks/useGames";
import PlatformIconsList from "./PlatformIconsList";

interface Props {
	game: Game;
}

const GameCard = ({ game }: Props) => {
	const { background_image, name, description, parent_platforms } = game;

	return (
		<Card overflow="hidden">
			<Image src={background_image} borderRadius={10} objectFit="cover" />
			<CardBody>
				<Heading marginBottom={2} textAlign="center" fontSize="2xl">
					{name}
				</Heading>
				<Text>{description}</Text>
				<PlatformIconsList platform={game.parent_platforms.map(({ platform }) => platform)} />
			</CardBody>
		</Card>
	);
};

export default GameCard;
