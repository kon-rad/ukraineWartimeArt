import { Box, Flex, Text, Image, Link, useMediaQuery } from "@chakra-ui/react";
import { COLLECTIONS } from '../utils/collections';
import { useState, useEffect } from 'react';

const Collections = () => {
    const [mediaQuery] = useMediaQuery("(max-width: 600px)");
    const [isMobile, setIsMobile] = useState(false)
  
    useEffect(() => {
      if(mediaQuery !== isMobile){
        setIsMobile(mediaQuery);
      }
    }, [mediaQuery])

    const renderCollection = (c: any) => {
        return (
            <Flex
                maxWidth="700px"
                direction={isMobile ? "column" : "row"}
                backgroundColor="gray.900"
                mb={8}
                p={6}
                borderRadius="12px"
            >
                <Image src={c.image} width="180px" objectFit="cover" m={isMobile ? "20px auto" : 6} borderRadius="12px" />
                <Flex direction="column">
                    <Text fontSize="3xl" mb={2}>{c.title}</Text>
                    <Text fontSize="md">{c.desc}</Text>
                    <Flex>
                        <Text fontSize="md" fontWeight="bold" mr="4">
                            Launch:
                        </Text>
                        <Text fontSize="md">{c.launch}</Text>
                    </Flex>
                    <Flex>
                        <Text fontSize="md" fontWeight="bold" mr="4">
                            Network:
                        </Text>
                        <Text fontSize="md">{c.network}</Text>
                    </Flex>
                    <Flex>
                        <Text fontSize="md" fontWeight="bold" mr="4">
                            Price:
                        </Text>
                        <Text fontSize="md">{c.price}</Text>
                    </Flex>
                    <Flex>
                        <Text fontSize="md" fontWeight="bold" mr="4">
                            Quantity:
                        </Text>
                        <Text fontSize="md">{c.quantity}</Text>
                    </Flex>
                    <Link mt={8} href={c.link} >Read More </Link>
                </Flex>
            </Flex>
        );
    };
    return (
        <Box my="40px" id="collections">
            <Text fontSize={isMobile ? "4xl" : "6xl"} textAlign="center" mb="6">
                Collections
            </Text>
            <Flex direction="column" align="center">
                {Object.values(COLLECTIONS).map(renderCollection)}
            </Flex>
        </Box>
    );
};

export default Collections;
