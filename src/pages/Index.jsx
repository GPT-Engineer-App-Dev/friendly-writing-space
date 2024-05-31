import { Box, Container, Heading, Text, VStack, useColorModeValue } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <Box bg={useColorModeValue("white", "gray.900")} color={useColorModeValue("black", "white")}>
      <Navbar />
      <Container maxW="container.md" py={10}>
        <VStack spacing={8} align="stretch">
          <Box bg={useColorModeValue("white", "gray.900")} color={useColorModeValue("black", "white")}>
            <Heading as="h1" mb={4}>
              Welcome to My Blog
            </Heading>
            <Text fontSize="lg">
              Hello! I'm excited to share my thoughts, experiences, and insights with you. Stay tuned for my latest blog posts!
            </Text>
          </Box>
          <Box bg={useColorModeValue("white", "gray.900")} color={useColorModeValue("black", "white")}>
            <Heading as="h2" mb={4}>
              Recent Posts
            </Heading>
            <VStack spacing={4} align="stretch">
              <Box p={5} shadow="md" borderWidth="1px" bg={useColorModeValue("white", "gray.900")} color={useColorModeValue("black", "white")}>
                <Heading fontSize="xl">First Blog Post</Heading>
                <Text mt={4}>This is a summary of my first blog post...</Text>
              </Box>
              <Box p={5} shadow="md" borderWidth="1px" bg={useColorModeValue("white", "gray.900")} color={useColorModeValue("black", "white")}>
                <Heading fontSize="xl">Second Blog Post</Heading>
                <Text mt={4}>This is a summary of my second blog post...</Text>
              </Box>
            </VStack>
          </Box>
        </VStack>
      </Container>
      <Footer />
    </Box>
  );
};

export default Index;