import { Box, Flex, Text, Image } from "@chakra-ui/react";

const TEAM = [
    {
        image: "/images/team/dima-lituiev.png",
        title: "Dima Lituiev",
        desc: "(born in Donetsk, Ukraine) works in medical informatics by day. He co-founded and led Music4Ukraine non-profit during the first Russian-Ukrainian war of 2014.",
    },
    {
        image: "/images/team/konrad-gnat.jpeg",
        title: "Konrad Gnat",
        desc: "Blockchain and full-stack developer, currently based in San Francisco. Passionate about protecting human rights and democratic values.",
    },
    {
        image: "/images/team/maya-tohidi.jpeg",
        title: "Maya Tohidi",
        desc: "bio soon to come",
    },
    {
        image: "/images/team/jarko-filevych.jpg",
        title: "Yarko Filevych ",
        desc: "A graphic designer and comic book author who lives in Western Ukraine. Yarko creates posters and illustrations for numerous magazines, websites, and events. ",
    },
];

const Team = () => {
    const renderCollection = (c: any) => {
        return (
            <Flex
                width="320px"
                minHeight="400px"
                direction="column"
                p={6}
                m={4}
                borderRadius="12px"
                borderColor={"Background.800"}
                borderWidth="2px"
            >
                <Image
                    style={{ margin: "0 auto 40px" }}
                    width="180px"
                    borderRadius="12px"
                    src={c.image}
                />
                <Text
                    fontSize="2xl"
                    position={"relative"}
                    color={"brand.800"}
                    style={{ width: "fit-content" }}
                    _after={{
                        content: "''",
                        width: "full",
                        height: "30%",
                        position: "absolute",
                        bottom: 1,
                        left: 0,
                        bg: "brand.900",
                        zIndex: -1,
                    }}
                >
                    {c.title}
                </Text>
                <Text fontSize="sm">{c.desc}</Text>
            </Flex>
        );
    };
    return (
        <Box my="40px" id="team">
            <Text fontSize="6xl" textAlign="center" mb="6">Team</Text>
            <Flex align="center" justify="center" wrap="wrap">
                {TEAM.map(renderCollection)}
            </Flex>
        </Box>
    );
};

export default Team;
