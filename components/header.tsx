import {
    Text,
    Image,
    Button,
    Flex,
    LinkBox,
    Spacer,
    Box,
    useMediaQuery,
    Link,
} from "@chakra-ui/react";
import { FaTwitter } from "react-icons/fa";
import NextLink from "next/link";
import Wallet from "./wallet";
import { TWITTER_URL } from '../utils/constants';

const Header = () => {
    const [isMobile] = useMediaQuery("(max-width: 600px)");

    return (
        <Flex as="header" p={4} alignItems="center">
            <LinkBox cursor="pointer">
                <NextLink href="/" passHref={true}>
                    <Flex align="center">
                        <Image
                            borderRadius="12px"
                            mr="4"
                            src="/images/flag.png"
                            width="40px"
                            height="40px"
                        />
                        {isMobile ? (
                            ""
                        ) : (
                            <Text fontWeight="bold" fontSize="2xl">
                                Ukraine Wartime Art
                            </Text>
                        )}
                    </Flex>
                </NextLink>
            </LinkBox>
            <Spacer />
            <Box mr={4}>
                <LinkBox>
                    <Link href={"/#collections"} target="_blank">
                        <Text fontSize="md" align="center">
                            Collections
                        </Text>
                    </Link>
                </LinkBox>
            </Box>
            <Box mr={4}>
                <LinkBox>
                    <Link href={"/#roadmap"} target="_blank">
                        <Text fontSize="md" align="center">
                            Roadmap
                        </Text>
                    </Link>
                </LinkBox>
            </Box>
            <Box mr={4}>
                <LinkBox>
                    <Link href={"#/team"} target="_blank">
                        <Text fontSize="md" align="center">
                            Team
                        </Text>
                    </Link>
                </LinkBox>
            </Box>
            <Box mr={4}>
                <LinkBox>
                    <Link href={TWITTER_URL} target="_blank">
                        <Button bg="gray.700">
                            <Flex align="center">
                                <FaTwitter style={{ color: "brand.800" }} />
                            </Flex>
                        </Button>
                    </Link>
                </LinkBox>
            </Box>
            <Box>
                <Wallet />
            </Box>
        </Flex>
    );
};

export default Header;
