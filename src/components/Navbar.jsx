import { Box, Flex, Link, Spacer, Text, useColorModeValue } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg={useColorModeValue("brand.700", "gray.800")} px={4} py={2} color={useColorModeValue("white", "gray.200")}>
      <Flex align="center">
        <Text fontSize="xl" fontWeight="bold">
          My Blog
        </Text>
        <Spacer />
        <Flex>
          <Link as={RouterLink} to="/" px={2}>
            Home
          </Link>
          <Link as={RouterLink} to="/about" px={2}>
            About
          </Link>
          <Link as={RouterLink} to="/blog" px={2}>
            Blog
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;