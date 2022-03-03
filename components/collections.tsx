import { Box, Flex, Text, Image } from '@chakra-ui/react';

const COLLECTIONS = [
    {
        image: "/images/collection-1.png",
        title: "Wartime Childrens Art",
        desc: "a short description here"
    },
    {
        image: "/images/collection-2.png",
        title: "Ukrainian Soldiers Generative Series",
        desc: "a short description here"
    }
]

const Collections = () => {
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
                {COLLECTIONS.map(renderCollection)}
            </Flex>
        </Box>
    )
}

export default Collections;