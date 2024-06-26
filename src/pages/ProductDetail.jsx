import { Box, Image, Text, Button, VStack } from "@chakra-ui/react";
import { useParams, Link } from "react-router-dom";

const sampleProducts = [
  { id: 1, name: "Smartphone", price: "$699", image: "/images/smartphone.jpg", description: "A high-end smartphone with a sleek design and powerful features." },
  { id: 2, name: "Laptop", price: "$999", image: "/images/laptop.jpg", description: "A powerful laptop with a fast processor and ample storage." },
  { id: 3, name: "Headphones", price: "$199", image: "/images/headphones.jpg", description: "Noise-cancelling headphones with superior sound quality." },
];

const ProductDetail = () => {
  const { id } = useParams();
  const product = sampleProducts.find(p => p.id === parseInt(id));

  if (!product) {
    return <Text>Product not found</Text>;
  }

  return (
    <Box p={4}>
      <Image src={product.image} alt={product.name} />
      <VStack p={4} align="start">
        <Text fontWeight="bold" fontSize="2xl">{product.name}</Text>
        <Text fontSize="xl">{product.price}</Text>
        <Text>{product.description}</Text>
        <Button as={Link} to="/products" colorScheme="teal">Back to Products</Button>
      </VStack>
    </Box>
  );
};

export default ProductDetail;