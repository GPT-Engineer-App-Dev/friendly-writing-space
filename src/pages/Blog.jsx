import { Box, Container, Heading, Text, VStack } from "@chakra-ui/react";

const Blog = () => {
  return (
    <Container maxW="container.md" py={10}>
      <Heading as="h1" mb={4}>
        Blog
      </Heading>
      <VStack spacing={4} align="stretch">
        <Box p={5} shadow="md" borderWidth="1px">
          <Heading fontSize="xl">First Blog Post</Heading>
          <Text mt={4}>This is a summary of my first blog post...</Text>
        </Box>
        <Box p={5} shadow="md" borderWidth="1px">
          <Heading fontSize="xl">Second Blog Post</Heading>
          <Text mt={4}>This is a summary of my second blog post...</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Blog;