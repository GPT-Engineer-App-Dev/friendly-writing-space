import { Box, Container, Heading, Text, VStack, Button, Input, Textarea, FormControl, FormLabel } from "@chakra-ui/react";
import { useState } from "react";

const Blog = () => {
  const [posts, setPosts] = useState([
    { title: "First Blog Post", content: "This is a summary of my first blog post...", date: "2023-01-01" },
    { title: "Second Blog Post", content: "This is a summary of my second blog post...", date: "2023-01-02" },
  ]);

  const [newPost, setNewPost] = useState({ title: "", content: "", date: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPost({ ...newPost, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPosts([newPost, ...posts]);
    setNewPost({ title: "", content: "", date: "" });
  };

  return (
    <Container maxW="container.md" py={10}>
      <Heading as="h1" mb={4}>
        Blog
      </Heading>
      <Box as="form" onSubmit={handleSubmit} mb={8}>
        <VStack spacing={4} align="stretch">
          <FormControl isRequired>
            <FormLabel>Title</FormLabel>
            <Input name="title" value={newPost.title} onChange={handleChange} />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Content</FormLabel>
            <Textarea name="content" value={newPost.content} onChange={handleChange} />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Date</FormLabel>
            <Input type="date" name="date" value={newPost.date} onChange={handleChange} />
          </FormControl>
          <Button type="submit" colorScheme="blue">
            Add Post
          </Button>
        </VStack>
      </Box>
      <VStack spacing={4} align="stretch">
        {posts.map((post, index) => (
          <Box key={index} p={5} shadow="md" borderWidth="1px">
            <Heading fontSize="xl">{post.title}</Heading>
            <Text mt={4}>{post.content}</Text>
            <Text mt={2} fontSize="sm" color="gray.500">
              {post.date}
            </Text>
          </Box>
        ))}
        
      </VStack>
    </Container>
  );
};

export default Blog;