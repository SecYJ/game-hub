import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
	const { games, loading, error } = useGames();

	console.log(games);

	return (
		<>
			<Text>{error && "canceled"}</Text>
			<SimpleGrid
				columns={{
					sm: 1,
					md: 2,
					lg: 3,
				}}
				spacing={10}
				paddingX="10px"
			>
				{loading &&
					[...Array(10)].map((_, index) => {
						return (
							<GameCardContainer key={index}>
								<GameCardSkeleton />
							</GameCardContainer>
						);
					})}
				{games.length > 0 &&
					games.map((game) => (
						<GameCardContainer key={game.id}>
							<GameCard game={game} />
						</GameCardContainer>
					))}
			</SimpleGrid>
		</>
	);
};

export default GameGrid;
