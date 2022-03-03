import { useState, useEffect } from "react";
import {
    Box,
    VStack,
    Flex,
    Text,
    Button,
    Input,
    useMediaQuery,
    Center,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import { toast } from "react-toastify";
import { collection, addDoc, getFirestore } from "firebase/firestore";

const db: any = getFirestore();

const SignUp = () => {
    const [email, setEmail] = useState<string>("");
    const [mediaQuery] = useMediaQuery("(max-width: 600px)");

    const handleSubmit = async () => {
        debugger;
        if (!email) {
            toast.error(`Make sure to enter your email!`, {
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
            await addDoc(collection(db, "landingpage"), {
                email,
            });
            toast(`You're signed up!`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            setEmail("");
        } catch (e) {
            toast.error(`${e}`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    };
    return (
        <Box my={24}>
            <Flex direction="column">
                <Center>
                    <Text textAlign="center" fontSize="4xl">
                        Get notified when we launch
                    </Text>
                </Center>
                <VStack justify="center" m="6">
                    <VStack py={6}>
                        <Text fontSize="lg" textAlign="center">
                            We will not share your email with third parties.
                        </Text>
                        <Flex 
                                mb={6}>
                            <Input
                                style={{
                                    fontFamily: "Exo",
                                    color: "white",
                                    backgroundColor: "brand.800",
                                    borderTopRightRadius: '0px',
                                    borderBottomRightRadius: '0px',
                                }}
                                color={"white"}
                                maxWidth={"500px"}
                                minWidth={"280px"}
                                name="email"
                                value={email}
                                onChange={(e: any) => setEmail(e.target.value)}
                                placeholder="enter your email"
                            />
                            <Button
                                style={{
                                    fontFamily: "Exo",
                                    borderTopLeftRadius: '0px',
                                    borderBottomLeftRadius: '0px',
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
                                onClick={handleSubmit}
                            >
                                <CheckIcon />
                            </Button>
                        </Flex>
                    </VStack>
                </VStack>
            </Flex>
        </Box>
    );
};

export default SignUp;
