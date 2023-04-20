import { SimpleGrid, Text } from "@chakra-ui/react";
import { useState } from "react";
import useGames from "../hooks/useGames";
import req from "../services/api-client";
import GameCard from "./GameCard";

const GameGrid = () => {
	const { games, loading, error } = useGames();

	console.log(games);

	if (loading) {
		return <p>Loading ...</p>;
	}

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
				{games.map((g) => (
					<GameCard key={g.id} gameData={g} />
				))}
			</SimpleGrid>
		</>
	);
};

export default GameGrid;
