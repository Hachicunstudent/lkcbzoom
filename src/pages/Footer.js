import React from 'react';
import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
  Image,
  Heading,
  IconButton,
  HStack,
  VStack,
  Flex,
} from '@chakra-ui/react';
import { FaPhone, FaCopy } from 'react-icons/fa';
import { SiZalo } from 'react-icons/si';

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const copyToClipboard = (text) => {
  navigator.clipboard.writeText(text);
  alert('Số tài khoản đã được sao chép');
};

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
      py={4}
      borderTop="1px solid"
      borderColor={useColorModeValue('gray.200', 'gray.700')}>
      <Container maxW={'6xl'}>
        <Flex direction={{ base: 'column', md: 'row' }} justify="space-between" align="start">
          <Stack direction={'column'} align={'start'} spacing={3} flex={1}>
            <Heading size="md">Thông tin chuyển khoản ngân hàng</Heading>
            <Box 
              bg={useColorModeValue('white', 'gray.800')} 
              p={4} 
              rounded="md" 
              shadow="md"
              textAlign="center"
              w="full"
            >
              <Text fontWeight="bold">Ngân hàng: <chakra.span color="teal.500">Viettinbank</chakra.span></Text>
              <HStack justifyContent="center">
                <Text fontWeight="bold">Số tài khoản: <chakra.span color="teal.500">105001266706</chakra.span></Text>
                <IconButton
                  icon={<FaCopy />}
                  size="sm"
                  onClick={() => copyToClipboard('105001266706')}
                  ml={2}
                  bg="yellow.500"
                  color="white"
                  _hover={{ bg: 'yellow.600' }}
                />
              </HStack>
              <Text>(hoặc nhập vào <chakra.span color="teal.500">LUCKHI</chakra.span> cũng ra người nhận)</Text>
              <Text fontWeight="bold">Chủ tài khoản: <chakra.span color="teal.500">Vũ Đức Đại</chakra.span></Text>
              <Text fontWeight="bold">Chi nhánh: <chakra.span color="teal.500">Vietinbank chi nhánh Đống Đa</chakra.span></Text>
              <HStack mt={4}>
                <Text fontWeight="bold">
                  Số điện thoại: <chakra.span color="teal.500">0397609660</chakra.span>
                </Text>
                <IconButton
                  icon={<FaPhone />}
                  size="sm"
                  as="a"
                  href="tel:0397609660"
                  bg="green.500"
                  color="white"
                  _hover={{ bg: 'green.600' }}
                />
              </HStack>
              <HStack mt={4}>
                <Text fontWeight="bold">
                  Liên hệ qua Zalo: 0397609660
                </Text>
                <IconButton
                  icon={<SiZalo />}
                  size="sm"
                  as="a"
                  href="https://zalo.me/0397609660"
                  bg="blue.500"
                  color="white"
                  _hover={{ bg: 'blue.600' }}
                />
              </HStack>
            </Box>
          </Stack>
          <Box boxSize="250px" mt={{ base: 4, md: 0 }} textAlign="center">
            <Image src="qr.jpg" alt="QR Code" />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}
