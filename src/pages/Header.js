import React from 'react';
import { Box, Flex, Text, Button } from '@chakra-ui/react';

const Header = ({ onRegisterClick }) => {
  return (
    <Box bg="teal.500" p={4} color="white">
      <Flex justify="space-between" align="center" maxW="1200px" mx="auto">
        <Text fontSize="xl" fontWeight="bold">Lục Khí</Text>
        <Button 
          colorScheme="teal" 
          variant="solid" 
          bg="white" 
          color="teal.500"
          onClick={onRegisterClick}
        >
          Đăng Kí Ngay
        </Button>
      </Flex>
    </Box>
  );
};

export default Header;
