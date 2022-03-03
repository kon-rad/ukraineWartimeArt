import { Box, Flex, Text, Image } from '@chakra-ui/react';

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
        <Box my="40px">
            <Flex direction="column">
                {ROADMAP.map(renderItem)}
            </Flex>
        </Box>
    )
}

export default Roadmap;