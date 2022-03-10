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
         Become a part of world history and support Ukraine's humanitarian and resistance efforts by purchasing one of NFT pieces from Ukrainian artists. Each collection has a unique story and cause. Join our <a href={DISCORD_URL} className="link" rel="nofollow" target="_blank">community</a> to connect with artists and people working on the ground.
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
    <Center>
          <Box my={6} backgroundColor="gray.700" p="6" borderRadius="12px">
    <blockquote className="twitter-tweet" >
      <p lang="en" dir="ltr">🎁 receive one of 50 NFTs:
      <br/>1️⃣ follow us on Twitter<br/>2️⃣ retweet 1 announcement<br/>3️⃣ join Discord:{' '}  
      <a href="https://t.co/qVpkNWVBWP">https://t.co/qVpkNWVBWP</a><br/>
      4️⃣ post your Twitter handle and your Polygon wallet public to the 
      <a href="https://twitter.com/hashtag/airdrop?src=hash&amp;ref_src=twsrc%5Etfw">#airdrop</a> Discord channel
      <br/>⏳ complete before Friday 3/11 11:59pm Pacific {' '}
      <a href="https://twitter.com/hashtag/StandWithUkraine%EF%B8%8F?src=hash&amp;ref_src=twsrc%5Etfw">#StandWithUkraine️</a>
      </p>&mdash; Ukraine Wartime Art (@ukrainewar_art) 
      <a href="https://twitter.com/ukrainewar_art/status/1501625354040926212?ref_src=twsrc%5Etfw">March 9, 2022</a>
      </blockquote> 
      <script async src="https://platform.twitter.com/widgets.js" ></script>

          </Box>
    </Center>
    </Box>

  );
};

export default Hero;
