import { useEffect, useState } from "react";
import apiClient, { CanceledError } from "../services/api-client";

interface Genre {
	name: string;
	id: number;
}

interface FetchGenreResponse {
	results: Genre[];
}

const useGenres = () => {
	const [data, setData] = useState<Genre[]>([]);
	const [error, setError] = useState("");
	const [isLoading, setLoading] = useState<boolean>(false);

	useEffect(() => {
		const controller = new AbortController();

		setLoading(true);
		apiClient
			.get<FetchGenreResponse>("/genres", { signal: controller.signal })
			.then((res) => {
				console.log(res);
				setData(res.data.results.map((d: Genre) => ({ id: d.id, name: d.name })));
				setLoading(false);
			})
			.catch((err) => {
				if (err instanceof CanceledError) return;
				setError(err.message);
				setLoading(false);
			});

		return () => controller.abort();
	}, []);

	return { data, isLoading, error };
};

export default useGenres;
