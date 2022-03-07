import {
  Box,
  Flex,
  Button,
  Text,
  Image,
  Link,
  useMediaQuery,
} from "@chakra-ui/react";
import { COLLECTIONS } from "../utils/collections";
import { useState, useEffect } from "react";
import { FaInstagram } from "react-icons/fa";
import Router from "next/router";
import Opensea from '../components/opensea';

const Collections = () => {
  const [mediaQuery] = useMediaQuery("(max-width: 600px)");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (mediaQuery !== isMobile) {
      setIsMobile(mediaQuery);
    }
  }, [mediaQuery]);

  const renderCollection = (c: any) => {
    if (c.type === 'opensea') {

    return (
      <Flex
        maxWidth="700px"
        direction={isMobile ? "column" : "row"}
        backgroundColor="gray.900"
        mb={8}
        p={6}
        borderRadius="12px"
      >
        <Image
          src={c.image}
          width="280px"
          objectFit="cover"
          m={isMobile ? "20px auto" : 6}
          borderRadius="12px"
        />
        <Flex direction="column">
          <Text fontSize="3xl" mb={2}>
            {c.title}
          </Text>
          <div dangerouslySetInnerHTML={{ __html: c.desc }}></div>
          <Flex align="center" justify="center" m={4} ><Link href={c.openseaUrl} ><Flex align="center"><Opensea /> <Text ml={2}>View On Opensea</Text></Flex></Link></Flex>
        </Flex>
      </Flex>
    );
    }
    return (
      <Flex
        maxWidth="700px"
        direction={isMobile ? "column" : "row"}
        backgroundColor="gray.900"
        mb={8}
        p={6}
        borderRadius="12px"
        cursor="pointer"
        onClick={() => Router.push(c.link)}
      >
        <Image
          src={c.image}
          width="280px"
          objectFit="cover"
          m={isMobile ? "20px auto" : 6}
          borderRadius="12px"
        />
        <Flex direction="column">
          <Text fontSize="3xl" mb={2}>
            {c.title}
          </Text>
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
          <Link mt={8} href={c.link}>
            Read More
          </Link>
          {c.minting && (
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
              onClick={() => Router.push(`/collection/${c.id}#mint`)}
            >
              Go to Mint
            </Button>
          )}
        </Flex>
      </Flex>
    );
  };
  return (
    <Box my="40px" id="collections">
      <Text my={8} fontSize={isMobile ? "4xl" : "6xl"} textAlign="center" mb="6">
        Collections
      </Text>
      <Flex direction="column" align="center">
        {Object.values(COLLECTIONS).map(renderCollection)}
      </Flex>
    </Box>
  );
};

export default Collections;
