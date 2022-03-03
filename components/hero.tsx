import { useState, useEffect } from 'react';
import { Box, HStack, Flex, Text, Image, useMediaQuery } from "@chakra-ui/react";

const Hero = () => {
    const [mediaQuery] = useMediaQuery("(max-width: 600px)");
    const [isMobile, setIsMobile] = useState(false)
  
    useEffect(() => {
      if(mediaQuery !== isMobile){
        setIsMobile(mediaQuery);
      }
    }, [mediaQuery])
    const flexDirection = isMobile ? "column" : "row";
    const svgDimension = isMobile ? "280px" : "400px";
    const imgDimension = isMobile ? "160px" : "260px";
    const svgTop = isMobile ? "62px" : "80px";
    const svgLeft = isMobile ? "22px" : '60px';

    return (
        <Flex width="100%" justify="center" direction={flexDirection}>
            <Flex direction="column" style={{ justifyContent: "space-around" }} mr={18} height="400px">
                <Text fontSize="4xl" maxWidth="600px">A series of Ukraine wartime art NFT collections</Text>
                <Text fontSize="md" maxWidth="400px">
                    We aim to raise aid funds for Ukraine with a series of NFT collections from a range of artists. Each collection has a unique story and cause. Become a part of world history by supporting Ukraine in fending off the aggression!
                </Text>
            </Flex>
            <Box>
                <div style={{ position: "relative", height: svgDimension, width: svgDimension }}>
                    <svg 
                        style={{ position: 'absolute' }}
                        viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#9D5C63" d="M53.5,-56.1C62.3,-44.7,57.6,-22.4,52.4,-5.2C47.1,11.9,41.5,23.9,32.7,33C23.9,42.1,11.9,48.3,-1.1,49.4C-14,50.4,-28.1,46.3,-43.3,37.2C-58.5,28.1,-74.9,14,-75.7,-0.8C-76.5,-15.6,-61.7,-31.2,-46.5,-42.6C-31.2,-54,-15.6,-61.1,3.4,-64.4C22.4,-67.8,44.7,-67.4,53.5,-56.1Z" transform="translate(100 100)" />
                        </svg>
                    <Image
                        style={{ position: 'absolute', top: svgTop, left: svgLeft, width: imgDimension }}
                        width="400px"
                        src="images/ukraine-map-regions.png"
                        objectFit="cover"
                    />
                </div>
            </Box>
        </Flex>
    );
};

export default Hero;
