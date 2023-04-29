import { Card, CardBody, Skeleton, SkeletonText, Stack } from "@chakra-ui/react";

const GameCardSkeleton = () => {
	return (
		<Card overflow="hidden" borderRadius={10}>
			<Skeleton height="300px" />
			<CardBody>
				<SkeletonText />
			</CardBody>
		</Card>
	);
};

export default GameCardSkeleton;
