import { useState, useEffect } from "react";
import {
  Box,
  Button,
  HStack,
  Center,
  Flex,
  Text,
  Image,
  useMediaQuery,
} from "@chakra-ui/react";
import Router from "next/router";
import { DISCORD_URL } from "../utils/constants";

const Hero = () => {
  const [mediaQuery] = useMediaQuery("(max-width: 600px)");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (mediaQuery !== isMobile) {
      setIsMobile(mediaQuery);
    }
  }, [mediaQuery]);
  const flexDirection = isMobile ? "column" : "row";
  const imgDimension = isMobile ? "220px" : "400px";
  const imgMargin = isMobile ? "80px auto 20px" : "20px auto";

  return (
    <Box>
      <Flex width="100%" justify="center" direction={flexDirection}>
        <Flex
          direction="column"
          style={{ justifyContent: "space-around" }}
          mr={18}
        >
          <Text fontSize={isMobile ? "2xl" : "4xl"} maxWidth="600px" mb="4">
            Stand with Ukrainian Artists
          </Text>
          <Text fontSize="md" maxWidth="460px">
            Become a part of world history and support Ukraine's humanitarian
            and resistance efforts by purchasing one of NFT pieces from
            Ukrainian artists. Each collection has a unique story and cause.
            Join our{" "}
            <a
              href={DISCORD_URL}
              className="link"
              rel="nofollow"
              target="_blank"
            >
              community
            </a>{" "}
            to connect with artists and people working on the ground.
          </Text>
          <Button
            style={{
              fontFamily: "Exo",
            }}
            _hover={{
              background: "brand.800",
              color: "brand.100",
            }}
            borderRadius="8px"
            size={"md"}
            fontWeight={"normal"}
            backgroundColor={"brand.800"}
            color={"brand.100"}
            width="200px"
            padding="2"
            my="8"
            onClick={() => Router.push("/collection/creatures#mint")}
          >
            Go to Mint
          </Button>
        </Flex>
        <Box>
          <Flex justify="center" align="center" height="100%">
            <Box width="400px"></Box>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default Hero;
