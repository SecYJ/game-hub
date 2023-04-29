import useData from "./useData";

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
	metacritic: number;
}

const useGames = () => useData<Game>("/games");

export default useGames;
