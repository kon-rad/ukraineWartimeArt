import { useMediaQuery, Box, Flex, Text, Image } from '@chakra-ui/react';
import { useState, useEffect } from 'react';

const ROADMAP = [
    {
        image: "/images/team-1.png",
        title: "Dima",
        desc: "a short description here"
    },
    {
        image: "/images/team-2.png",
        title: "Jarko",
        desc: "a short description here"
    },
    {
        image: "/images/team-3.png",
        title: "Maryam",
        desc: "a short description here"
    },
    {
        image: "/images/team-4.png",
        title: "Konrad",
        desc: "a short description here"
    }
]

const Roadmap = () => {
    const [mediaQuery] = useMediaQuery("(max-width: 600px)");
    const [isMobile, setIsMobile] = useState(false)
  
    useEffect(() => {
      if(mediaQuery !== isMobile){
        setIsMobile(mediaQuery);
      }
    }, [mediaQuery])
    const renderItem = (c: any) => {
        return (
            <Flex direction="column">
                <Image src={c.image} width="180px" m={6}/>
                <Text fontSize="2xl">{c.title}</Text>
                <Text fontSize="md">{c.desc}</Text>
            </Flex>
        )
    }
    return (
        <Box my="40px" id="roadmap">
            <Text fontSize={isMobile ? "4xl" : "6xl"} textAlign="center" mb="6">
                Roadmap
            </Text>
            <Text fontSize={"2xl"} textAlign="center" mb="6">
                coming soon
            </Text>
            {/* <Flex direction="column">
                {ROADMAP.map(renderItem)}
            </Flex> */}
        </Box>
    )
}

export default Roadmap;