import { Box, Flex, Link, Text, useColorModeValue } from "@chakra-ui/react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <Box bg={useColorModeValue("brand.900", "gray.800")} color={useColorModeValue("white", "gray.200")} py={4} mt={10}>
      <Flex direction="column" align="center">
        <Text mb={2}>Contact: email@example.com</Text>
        <Flex>
          <Link href="https://twitter.com" isExternal mx={2}>
            <FaTwitter />
          </Link>
          <Link href="https://linkedin.com" isExternal mx={2}>
            <FaLinkedin />
          </Link>
          <Link href="https://github.com" isExternal mx={2}>
            <FaGithub />
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;