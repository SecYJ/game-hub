import { HStack, Icon, SimpleGrid } from "@chakra-ui/react";
import { Platform } from "../hooks/useGames";
import { IconBaseProps, IconType } from "react-icons";
import { BsNintendoSwitch, BsPlaystation, BsWindows } from "react-icons/bs";
import { FaXbox, FaLinux } from "react-icons/fa";

interface Props {
	platform: Platform[];
}

interface IconListType {
	[platformName: string]: IconType;
}

const iconType: IconListType = {
	playstation: BsPlaystation,
	pc: BsWindows,
	xbox: FaXbox,
	nintendo: BsNintendoSwitch,
	linux: FaLinux,
};

const PlatformIconsList = ({ platform }: Props) => {
	return (
		<HStack my={1}>
			{platform.map((p) => (
				<Icon bg="gray.500" as={iconType[p.slug]} />
			))}
		</HStack>
	);
};

export default PlatformIconsList;
