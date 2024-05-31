import { Box, Container, Heading, Text, useColorModeValue } from "@chakra-ui/react";

const About = () => {
  return (
    <Container maxW="container.md" py={10} bg={useColorModeValue("white", "gray.900")} color={useColorModeValue("black", "white")}>
      <Heading as="h1" mb={4}>
        About Me
      </Heading>
      <Text fontSize="lg">
        Hello! I'm a passionate blogger who loves to write about various topics including technology, travel, and personal development. Welcome to my personal blog where I share my thoughts, experiences, and insights.
      </Text>
    </Container>
  );
};

export default About;