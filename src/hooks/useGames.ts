import { useEffect, useState } from "react";
import apiClient, { CanceledError } from "../services/api-client";

export interface Platform {
	id: number;
	slug: string;
	name: string;
}
export interface Game {
	name: string;
	id: number;
	background_image: string;
	description: string;
	parent_platforms: { platform: Platform }[];
}

interface FetchGamesResponse {
	count: number;
	results: Game[];
}

const useGames = () => {
	const [games, setGames] = useState<Game[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string>("");

	useEffect(() => {
		setLoading(true);
		const controller = new AbortController();

		apiClient
			.get<FetchGamesResponse>("/games", { signal: controller.signal })
			.then((res) => {
				setGames(res.data.results);
				setLoading(false);
			})
			.catch((err) => {
				if (err instanceof CanceledError) return;
				setError(err.message);
				setLoading(false);
			});

		return () => controller.abort();
	}, []);

	return { games, loading, error };
};

export default useGames;
