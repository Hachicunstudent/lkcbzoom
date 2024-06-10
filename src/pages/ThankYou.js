import React from 'react';
import { useLocation } from 'react-router-dom';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Image,
  HStack,
  Button,
  useClipboard,
  Flex,
} from '@chakra-ui/react';
import { SiZalo } from 'react-icons/si';
import removeAccents from 'remove-accents';

const ThankYou = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const name = queryParams.get('name');
  const phone = queryParams.get('phone');
  const course = queryParams.get('course');

  const cleanedName = removeAccents(name).toLowerCase();

  const { onCopy: copyAccountNumber, hasCopied: hasCopiedAccountNumber } = useClipboard('105001266706');
  const { onCopy: copyAmount, hasCopied: hasCopiedAmount } = useClipboard('1000000');
  const note = `lkcb ${cleanedName} ${phone}`;
  const { onCopy: copyNote, hasCopied: hasCopiedNote } = useClipboard(note);

  const qrUrl = `https://img.vietqr.io/image/vietinbank-105001266706-compact2.jpg?amount=1000000&addInfo=${note}`;

  return (
    <Container centerContent maxW="full" p={4}>
      <Box p={4} bg="teal.500" color="white" borderRadius="md" boxShadow="md" textAlign="center" w="full" maxW="600px">
        <Heading size="lg" mb={4}>Cảm ơn bạn đã đăng ký khóa học {course}!</Heading>
        <Text fontSize="lg" mb={4}>Họ tên: {name}</Text>
        <Text fontSize="lg" mb={4}>Số điện thoại: {phone}</Text>
        <Text fontSize="xl" fontWeight="bold" mb={8}>Thanh toán để hoàn tất</Text>
        <Text fontSize="md" mb={2}>Quét mã QR sau để thanh toán:</Text>
        <Box mb={8}> {/* Added margin-bottom to create spacing */}
          <Image src={qrUrl} alt="QR Code" objectFit="contain" boxSize="200px" mx="auto" />
        </Box>
        <Box p={4} bg="white" color="teal.800" borderRadius="md" boxShadow="md" textAlign="left" w="full">
          <VStack align="stretch" spacing={4}> {/* Increased the spacing to 4 */}
            <HStack justify="space-between">
              <Text fontWeight="bold">Ngân hàng:</Text>
              <Text>Vietinbank</Text>
            </HStack>
            <HStack justify="space-between">
              <Text fontWeight="bold">Tên tài khoản:</Text>
              <Text>Vũ Đức Đại</Text>
            </HStack>
            <HStack justify="space-between">
              <Text fontWeight="bold">Số tài khoản:</Text>
              <HStack>
                <Text>105001266706</Text>
                <Button size="sm" onClick={copyAccountNumber} bg="teal.500" color="white" _hover={{ bg: 'teal.600' }}>
                  {hasCopiedAccountNumber ? 'Đã sao chép' : 'Sao chép'}
                </Button>
              </HStack>
            </HStack>
            <HStack justify="space-between">
              <Text fontWeight="bold">Số tiền:</Text>
              <HStack>
                <Text>1,000,000 VND</Text>
                <Button size="sm" onClick={copyAmount} bg="teal.500" color="white" _hover={{ bg: 'teal.600' }}>
                  {hasCopiedAmount ? 'Đã sao chép' : 'Sao chép'}
                </Button>
              </HStack>
            </HStack>
            <HStack justify="space-between">
              <Text fontWeight="bold">Nội dung:</Text>
              <HStack>
                <Text>{note}</Text>
                <Button size="sm" onClick={copyNote} bg="teal.500" color="white" _hover={{ bg: 'teal.600' }}>
                  {hasCopiedNote ? 'Đã sao chép' : 'Sao chép'}
                </Button>
              </HStack>
            </HStack>
            <Text mt={4}>Sau khi chuyển khoản xong, gửi hình ảnh qua Zalo: 0397609660.</Text>
            <Button leftIcon={<SiZalo />} colorScheme="blue" variant="solid" as="a" href="https://zalo.me/0397609660">
              Gửi thanh toán Zalo
            </Button>
          </VStack>
        </Box>
      </Box>
    </Container>
  );
};

export default ThankYou;
