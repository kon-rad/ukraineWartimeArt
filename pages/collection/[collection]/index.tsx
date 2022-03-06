import type { NextPage } from "next";
import { useRouter } from "next/router";
import { Box, Input, Button, Text, Flex, Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { COLLECTIONS } from "../../../utils/collections";

import { useWeb3React } from "@web3-react/core";
import { ethers } from "ethers";
import MiroslavasCreatures from "../../../artifacts/contracts/MiroslavasCreatures.sol/MiroslavasCreatures.json";
import web3 from "web3";
import { toast } from "react-toastify";
import { miroslavasCreaturesAddress } from "../../../config";

const Creatures: NextPage = () => {
  const router = useRouter();
  const [col, setCol] = useState<any>();
  const [qty, setQty] = useState<number>(1);

  const web3React = useWeb3React();

  console.log(router.query);
  useEffect(() => {
    const collectionName = router.query.collection + "";
    setCol(COLLECTIONS[collectionName]);
  }, [router.query.collection]);
  const earlyMint = true;
  const MINT_PRICE = earlyMint ? 5 : 150;

  const handleMint = async () => {
    console.log("checkout ");

    const provider = web3React.library;
    if (!provider) {
      toast.error(`You must sign in to Polygon network with Metamask!`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    try {
      const ethValue = web3.utils.toWei((qty * MINT_PRICE).toString(), "ether");
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        miroslavasCreaturesAddress,
        MiroslavasCreatures.abi,
        signer
      );
      const transaction = await contract.mintCreature(qty, {
        value: ethValue,
      });

      const transData = await transaction.wait();
      toast(
        `You successfully minted! Thanks for your solidarity with Ukraine`,
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
      );
      console.log("transData: ", transData.transactionHash);
    } catch (e) {
      toast.error(`Error: ${e.data ? e.data.message : e.message}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
  };

  if (!col) {
    return <Box>loading</Box>;
  }
  const renderElem = (e: any) => {
    switch (e.type) {
      case "Text":
        return <Text style={e.style}>{e.content}</Text>;
      case "Image":
        return <Image src={e.src} style={e.style} />;
    }
  };

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

{col.minting && (
            <Flex id="mint" my={12} direction="column">
              <Text textAlign="center" color={"brand.800"} fontSize="2xl">
                Mint is Live
              </Text>
              <Text textAlign="center" color={"brand.800"} fontSize="md">
                {earlyMint
                  ? "* First 50 Mints for 5 MATIC *"
                  : `price ${MINT_PRICE} MATIC`}
              </Text>
              <Flex mt={"6"} justify="center">
                <Input
                  mr={4}
                  width={"180px"}
                  placeholder="Quantity"
                  value={qty}
                  onChange={(e: any) => setQty(+e.target.value)}
                />
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
                  onClick={handleMint}
                >
                  Mint
                </Button>
              </Flex>
            </Flex>
          )}
        <Flex direction="column" maxWidth="700px">
          <Text fontSize="md" mb={2}>
            {col.desc}
          </Text>
          <Text fontSize="md" mb={2}>
            {col.longDescription}
          </Text>
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
          {col.descriptionElements &&
            col.descriptionElements.map((e: any) => renderElem(e))}
        </Flex>
      </Flex>
    </Box>
  );
};

export default Creatures;
