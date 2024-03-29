import { Image, LinkBox, Spacer, useMediaQuery } from "@chakra-ui/react";
import { FaTwitter, FaInstagram, FaDiscord } from "react-icons/fa";
import Wallet from "./wallet";
import { TWITTER_URL, INSTAGRAM_URL, DISCORD_URL } from "../utils/constants";
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";

export default function Header() {
  const { isOpen, onToggle } = useDisclosure();
  const [isMobile] = useMediaQuery("(max-width: 600px)");

  return (
    <Box>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex
          flex={{ base: 1 }}
          justify={{ base: "space-between", md: "space-between" }}
        >
          <Link href="/">
            <Flex justify="center">
              <Image
                borderRadius="12px"
                mr="4"
                src="/images/logo.jpeg"
                width="40px"
                height="40px"
              />
              {isMobile ? (
                ""
              ) : (
                <Text fontWeight="bold" fontSize="2xl">
                  Ukraine Wartime Art
                </Text>
              )}
            </Flex>
          </Link>

          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack direction={"row"} spacing={4} justify="center">
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label} pt={2}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? "#"}
                fontSize={"sm"}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
                mt={4}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
      <Flex mr={4} justify="center">
        <Link mr={4} href={TWITTER_URL} target="_blank">
          <Flex height="100%" align="center" justify="center">
            <FaTwitter style={{ color: "brand.800" }} />
          </Flex>
        </Link>
        <Link mr={4} href={INSTAGRAM_URL} target="_blank">
          <Flex height="100%" align="center" justify="center">
            <FaInstagram style={{ color: "brand.800" }} />
          </Flex>
        </Link>
        <Link href={DISCORD_URL} target="_blank">
          <Flex height="100%" align="center" justify="center">
            <FaDiscord style={{ color: "brand.800" }} />
          </Flex>
        </Link>
      </Flex>
      <Box>
        <Wallet />
      </Box>
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <Link
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "pink.400" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{
            opacity: "100%",
            transform: "translateX(0)",
          }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
      <Flex mr={4}  justify="start">
        <Link mr={4} href={TWITTER_URL} target="_blank">
          <Flex height="100%" align="center" justify="center">
            <FaTwitter style={{ color: "brand.800" }} />
          </Flex>
        </Link>
        <Link href={INSTAGRAM_URL} target="_blank">
          <Flex height="100%" align="center" justify="center">
            <FaInstagram style={{ color: "brand.800" }} />
          </Flex>
        </Link>
      </Flex>
      <Box>
        <Wallet />
      </Box>
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Collections",
    // children: [
    //     {
    //         label: "Wartime Childrens Art",
    //         subLabel: "Collection of 240 unique pieces",
    //         href: "/wartime-childrens-art",
    //     },
    //     {
    //         label: "Ukraine Soldiers PFP",
    //         subLabel: "Set of 10,000 unique profile images",
    //         href: "/soldier-pfp",
    //     },
    // ],
    href: "/#collections",
  },
  {
    label: "Team",
    href: "/#team",
  },
];

// const Header2 = () => {
//     return (
//         <Flex as="header" p={4} alignItems="center">
//             <LinkBox cursor="pointer">
//                 <NextLink href="/" passHref={true}>
//                     <Flex align="center">
//                         <Image
//                             borderRadius="12px"
//                             mr="4"
//                             src="/images/flag.png"
//                             width="40px"
//                             height="40px"
//                         />
//                         {isMobile ? (
//                             ""
//                         ) : (
//                             <Text fontWeight="bold" fontSize="2xl">
//                                 Ukraine Wartime Art
//                             </Text>
//                         )}
//                     </Flex>
//                 </NextLink>
//             </LinkBox>
//             <Spacer />
//             <Box mr={4}>
//                 <LinkBox>
//                     <Link href={"/#collections"} target="_blank">
//                         <Text fontSize="md" align="center">
//                             Collections
//                         </Text>
//                     </Link>
//                 </LinkBox>
//             </Box>
//             <Box mr={4}>
//                 <LinkBox>
//                     <Link href={"/#roadmap"} target="_blank">
//                         <Text fontSize="md" align="center">
//                             Roadmap
//                         </Text>
//                     </Link>
//                 </LinkBox>
//             </Box>
//             <Box mr={4}>
//                 <LinkBox>
//                     <Link href={"#/team"} target="_blank">
//                         <Text fontSize="md" align="center">
//                             Team
//                         </Text>
//                     </Link>
//                 </LinkBox>
//             </Box>
//         </Flex>
//     );
// };
