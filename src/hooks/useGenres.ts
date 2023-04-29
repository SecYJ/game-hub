import useData from "./useData";
interface Genre {
	name: string;
	id: number;
}

const useGenres = () => useData<Genre>("/genres");

export default useGenres;
