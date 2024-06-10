import React from 'react';
import { Box, Image, SimpleGrid, Button, Flex } from '@chakra-ui/react';

const images = [
  '1.jpg',
  '3.jpg',
  '2.jpg',
  '4.jpg',
  '5.jpg',
  '6.jpg',
  '7.png',
  '8.png',
  '9.png',
  '10.png',
  '11.jpg',
  '12.jpg',
  '13.jpg',
  '14.jpg',
  // Thêm các đường dẫn hình ảnh khác ở đây
];

const Result = ({ onRegisterClick }) => {
  return (
    <Box p={5}>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={10}>
        {images.map((src, index) => (
          <Image key={index} src={src} alt={`result-${index}`} />
        ))}
      </SimpleGrid>
      <Flex justify="center" mt={10}>
        <Button
          onClick={onRegisterClick}
          colorScheme="red"
          variant="solid"
          size="lg"
        >
          Đăng Kí Ngay
        </Button>
      </Flex>
    </Box>
  );
};

export default Result;
