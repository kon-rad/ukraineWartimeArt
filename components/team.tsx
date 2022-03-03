import { Box, Flex, Text, Image } from '@chakra-ui/react';

const TEAM = [
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

const Team = () => {
    const renderCollection = (c: any) => {
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
            <Flex>
                {TEAM.map(renderCollection)}
            </Flex>
        </Box>
    )
}

export default Team;