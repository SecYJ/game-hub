import { Card, CardHeader, CardBody, CardFooter, Text, Image, Heading } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";

interface Props {
	gameData: Game;
}

const GameCard = ({ gameData }: Props) => {
	const { background_image, name, description } = gameData;

	return (
		<Card overflow="hidden">
			<Image src={background_image} borderRadius={10} objectFit="cover" />
			<CardBody>
				<Heading textAlign="center" fontSize="2xl">
					{name}
				</Heading>
				<Text>{description}</Text>
			</CardBody>
		</Card>
	);
};

export default GameCard;
