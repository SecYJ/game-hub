import { Link, List, ListItem } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";

const GenreList = () => {
	const { data: genreList, isLoading } = useGenres();

	if (isLoading) {
		return <p>Loading...</p>;
	}

	return (
		<List px="10px">
			{genreList.map((genre) => (
				<ListItem key={genre.id}>
					<Link>{genre.name}</Link>
				</ListItem>
			))}
		</List>
	);
};

export default GenreList;
