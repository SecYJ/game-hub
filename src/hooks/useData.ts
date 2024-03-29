import { useEffect, useState } from "react";
import apiClient, { CanceledError } from "../services/api-client";

interface FetchResponse<T> {
	results: T[];
}

const useData = <T>(url: string) => {
	const [data, setData] = useState<T[]>([]);
	const [error, setError] = useState("");
	const [isLoading, setLoading] = useState(false);

	useEffect(() => {
		const controller = new AbortController();
		setLoading(true);

		apiClient
			.get<FetchResponse<T>>(url, { signal: controller.signal })
			.then((res) => {
				setData(res.data.results);
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

export default useData;
