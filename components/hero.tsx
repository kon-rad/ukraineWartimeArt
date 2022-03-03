import { Box, Flex, Text, Image } from "@chakra-ui/react";

const Hero = () => {
    return (
        <Flex>
            <Flex direction="column" justify="center" mr={18} height="400px">
                <Text fontSize="6xl">Ukraine Wartime Art</Text>
                <Text fontSize="xl">
                    we need to include a sentance or two that captures the
                    project main idea
                </Text>
            </Flex>
            <Box>
                <div style={{ position: "relative", height: "400px", width: "400px" }}>
                    <svg 
                        style={{ position: 'absolute' }}
                        viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#9D5C63" d="M53.5,-56.1C62.3,-44.7,57.6,-22.4,52.4,-5.2C47.1,11.9,41.5,23.9,32.7,33C23.9,42.1,11.9,48.3,-1.1,49.4C-14,50.4,-28.1,46.3,-43.3,37.2C-58.5,28.1,-74.9,14,-75.7,-0.8C-76.5,-15.6,-61.7,-31.2,-46.5,-42.6C-31.2,-54,-15.6,-61.1,3.4,-64.4C22.4,-67.8,44.7,-67.4,53.5,-56.1Z" transform="translate(100 100)" />
                        </svg>
                    <Image
                        style={{ position: 'absolute', top: '80px', left: '60px', width: '260px' }}
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
