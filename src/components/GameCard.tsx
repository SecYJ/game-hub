import { Card, CardBody, Text, Image, Heading, HStack } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import crop from "../services/image-url";
import CriticScore from "./CriticScore";
import PlatformIconsList from "./PlatformIconsList";

interface Props {
	game: Game;
}

const GameCard = ({ game }: Props) => {
	const { metacritic, background_image, name, description, parent_platforms } = game;

	return (
		<Card>
			<Image src={crop(background_image)} borderRadius={10} objectFit="cover" />
			<CardBody>
				<Heading marginBottom={2} textAlign="center" fontSize="2xl">
					{name}
				</Heading>
				<Text>{description}</Text>
				<HStack justifyContent="space-between">
					<PlatformIconsList platform={game.parent_platforms.map(({ platform }) => platform)} />
					<CriticScore score={metacritic} />
				</HStack>
			</CardBody>
		</Card>
	);
};

export default GameCard;
