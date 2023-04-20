import axios, { CanceledError } from "axios";

export default axios.create({
	baseURL: "https://api.rawg.io/api",
	params: {
		key: "07af72d2eb39440c857f4356da9c5bb0",
	},
});

export { CanceledError };
