import { useState, useEffect } from "react";
import {
  Box,
  Button,
  HStack,
  Flex,
  Text,
  Image,
  useMediaQuery,
} from "@chakra-ui/react";
import Router from "next/router";

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
    <Flex width="100%" justify="center" direction={flexDirection}>
      <Flex
        direction="column"
        style={{ justifyContent: "space-around" }}
        mr={18}
      >
        <Text fontSize={isMobile ? "2xl" : "4xl"} maxWidth="600px" mb="4">
          A series of Ukraine wartime art NFT collections
        </Text>
        <Text fontSize="md" maxWidth="460px">
          Our mission is to enable everyone to contribute to Ukrainian
          humanitarian efforts and resistance movement through a series of NFT
          collections. Our collections tell the story of Ukrainian people, who
          suddenly had to drop everything to go defend their land or flee their
          homes. Each collection has its unique story and cause. Become a part
          of world history by supporting the people of Ukraine in fending off
          the aggression!
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
  );
};

export default Hero;
