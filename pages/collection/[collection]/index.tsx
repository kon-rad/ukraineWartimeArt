import type { NextPage } from "next";
import { useRouter } from "next/router";
import { Box, Center, Text, Flex, Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { COLLECTIONS } from "../../../utils/collections";

const Creatures: NextPage = () => {
    const router = useRouter();
    const [col, setCol] = useState<any>();
    console.log(router.query);
    useEffect(() => {
        const collectionName = router.query.collection + "";
        setCol(COLLECTIONS[collectionName]);
    }, [router.query.collection]);
    if (!col) {
        return <Box>loading</Box>;
    }
    return (
        <Box m={16}>
            <Flex
                direction="column"
                mb={8}
                p={6}
                borderRadius="12px"
                justify="center"
                align="center"
            >
                <Text textAlign="center" fontSize="6xl" mb={2}>
                    {col.title}
                </Text>
                <Image
                    src={col.image}
                    maxWidth="400px"
                    objectFit="cover"
                    m={6}
                    borderRadius="12px"
                />
                <Flex direction="column" maxWidth="700px">
                    <Text fontSize="md" mb={2}>{col.desc}</Text>
                    <Text fontSize="md" mb={2}>{col.longDescription}</Text>
                    <Flex>
                        <Text fontSize="md" fontWeight="bold" mr="4">
                            Launch:
                        </Text>
                        <Text fontSize="md">{col.launch}</Text>
                    </Flex>
                    <Flex>
                        <Text fontSize="md" fontWeight="bold" mr="4">
                            Network:
                        </Text>
                        <Text fontSize="md">{col.network}</Text>
                    </Flex>
                    <Flex>
                        <Text fontSize="md" fontWeight="bold" mr="4">
                            Price:
                        </Text>
                        <Text fontSize="md">{col.price}</Text>
                    </Flex>
                    <Flex>
                        <Text fontSize="md" fontWeight="bold" mr="4">
                            Quantity:
                        </Text>
                        <Text fontSize="md">{col.quantity}</Text>
                    </Flex>
                </Flex>
            </Flex>
        </Box>
    );
};

export default Creatures;
