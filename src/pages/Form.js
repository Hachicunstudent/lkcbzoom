import React, { useState } from 'react';
import {
  Container,
  Flex,
  Box,
  Heading,
  VStack,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  Button,
  useColorModeValue,
  Spinner,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
} from '@chakra-ui/react';
import { MdPhone } from 'react-icons/md';
import { BsPerson } from 'react-icons/bs';

export default function Form() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    onOpen();

    const formData = new FormData(event.target);
    const data = {
      datetime: new Date().toISOString(),
      name: formData.get('name'),
      phone: formData.get('phone'),
      notes: formData.get('notes'),
      course: formData.get('course')
    };

    try {
      const response = await fetch('https://hook.eu1.make.com/nw5v9pgifymt65eae32n5rhlyyu4pbs7', { // Replace with your script ID
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        window.location.href = `/thankyou?course=${encodeURIComponent(data.course)}&name=${encodeURIComponent(data.name)}&phone=${encodeURIComponent(data.phone)}`;
      } else {
        console.error('Form submission error:', response.statusText);
        setIsSubmitting(false);
        onClose();
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setIsSubmitting(false);
      onClose();
    }
  };  return (
    <Container maxW="full" centerContent overflow="hidden" p={0} bg={useColorModeValue('teal.100', 'teal.900')}>
      <Flex justify="center" w="full">
        <Box
          bg={useColorModeValue('teal.500', 'teal.800')}
          color="white"
          borderRadius="lg"
          m={{ base: 4, md: 16 }}
          p={{ base: 5, md: 10 }}
          w={{ base: 'full', md: '70%' }}
        >
          <Box bg="white" borderRadius="lg" p={8} color="gray.800">
            <VStack spacing={5} as="form" onSubmit={handleSubmit}>
              <Heading color="teal.500" size="lg">Đăng Kí Khóa Học</Heading>
              <FormControl id="course" isRequired>
                <FormLabel fontSize="lg">Khóa học</FormLabel>
                <InputGroup borderColor="teal.200">
                  <Input type="text" name="course" value="Lục Khí Cơ Bản" readOnly size="lg" />
                </InputGroup>
              </FormControl>
              <FormControl id="name" isRequired>
                <FormLabel fontSize="lg">Họ tên</FormLabel>
                <InputGroup borderColor="teal.200">
                  <InputLeftElement
                    pointerEvents="none"
                    children={<BsPerson color="gray.800" />}
                  />
                  <Input type="text" name="name" size="lg" />
                </InputGroup>
              </FormControl>
              <FormControl id="phone" isRequired>
                <FormLabel fontSize="lg">Số điện thoại sử dụng Zalo của bạn</FormLabel>
                <InputGroup borderColor="teal.200">
                  <InputLeftElement
                    pointerEvents="none"
                    children={<MdPhone color="gray.800" />}
                  />
                  <Input type="tel" name="phone" size="lg" />
                </InputGroup>
              </FormControl>
              <FormControl id="notes">
                <FormLabel fontSize="lg">Ghi chú (nếu có)</FormLabel>
                <Textarea
                  borderColor="teal.200"
                  _hover={{
                    borderRadius: 'teal.300',
                  }}
                  placeholder="Ghi chú"
                  name="notes"
                  size="lg"
                />
              </FormControl>
              <FormControl id="submit" float="right">
                <Button
                  type="submit"
                  variant="solid"
                  bg="teal.500"
                  color="white"
                  _hover={{ bg: 'teal.600' }}
                  isLoading={isSubmitting}
                  size="lg"
                >
                  Đăng Kí
                </Button>
              </FormControl>
            </VStack>
          </Box>
        </Box>
      </Flex>
  
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign="center">Đang đăng ký, vui lòng đợi</ModalHeader>
          <ModalBody display="flex" justifyContent="center" alignItems="center">
            <Spinner size="xl" />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Container>
  );
  }
  