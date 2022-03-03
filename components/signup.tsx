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
                    <Text fontSize="4xl">Get notified about the launch</Text>
                </Center>
                <VStack justify="center" m="6">
                    <VStack py={6}>
                        <Text fontSize="lg">
                            We will not share your email with third parties.
                        </Text>
                        <Input
                            mb={6}
                            style={{
                                fontFamily: "Exo",
                                color: "white",
                                backgroundColor: "brand.800",
                            }}
                            color={"white"}
                            width={"500px"}
                            name="email"
                            value={email}
                            onChange={(e: any) => setEmail(e.target.value)}
                            placeholder="enter your email"
                        />
                    </VStack>
                    <Button
                        style={{
                            fontFamily: "Exo",
                        }}
                        _hover={{
                            background: "brand.800",
                            color: "brand.100",
                        }}
                        borderRadius="8px"
                        size={"lg"}
                        fontWeight={"normal"}
                        backgroundColor={"brand.800"}
                        color={"brand.100"}
                        width={"220px"}
                        px={6}
                        onClick={handleSubmit}
                        my={8}
                    >
                        Get Notified
                    </Button>
                </VStack>
            </Flex>
        </Box>
    );
};

export default SignUp;
