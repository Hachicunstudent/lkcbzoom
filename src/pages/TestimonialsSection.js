import React, { useState } from 'react';
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  Button,
  useColorModeValue,
  Icon,
} from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';

const testimonials = [
  {
    name: 'Chú Nguyễn Khắc Ngụ',
    role: 'Học viên Lục Khí Cơ Bản K10',
    content:
      'Chú Ngụ đã dùng Lục Khí chữa khỏi bệnh đau dạ dày, và áp dụng Lục Khí chữa cho rất nhiều người khác nữa',
    avatar: '/avatar/khacngu.png',
    video: 'https://www.youtube.com/embed/510vTz8zQcg?t=920',
  },
  {
    name: 'Chị Đõ Thanh Diệu',
    role: 'Học viên Lục Khí Cơ Bản K8',
    content:
      "Chị Diệu đã dùng Lục Khí chữa cho mẹ bị suy kiệt, đi ngoài ra máu, nhiệt miệng. Đặc biệt chữa được bệnh hiếm muộn cho chính bản thân của mình",
    avatar: '/avatar/thanhdieu.png',
    video: 'https://www.youtube.com/embed/mULJNTPBNzU?t=1200',
  },
  {
    name: 'Chị Nguyễn Thảo',
    role: 'Học viên Lục Khí Cơ Bản K10',
    content:
      "Đã áp dụng Lục Khí chữa bệnh nóng bàn tay, bàn chân",
    avatar: '/avatar/nguyenthao.png',
    video: 'https://www.youtube.com/embed/O3HWk12AtIs?t=4670',
  },
  {
    name: 'Cô Thanh Nga',
    role: 'Lục Khí Cơ Bản K7',
    content:
      'Cô Thanh Nga đã dùng Lục Khí điều trị khỏi bệnh nhân xơ, u nang tuyến giáp',
    avatar: '/avatar/thanhnga.png',
    video: 'https://www.youtube.com/embed/dJOdh67rtlY?t=2009',
  },
];

const TestimonialCard = ({ name, role, content, avatar, video }) => {
  return (
    <Center py={6}>
      <Box
        maxW={'445px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'md'}
        p={6}
        overflow={'hidden'}>
        <Box
          h={'210px'}
          bg={'gray.100'}
          mt={-6}
          mx={-6}
          mb={6}
          pos={'relative'}>
          <Box as="iframe"
            width="100%"
            height="210px"
            src={video}
            title={name}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen />
        </Box>
        <Stack>
          <Heading
            color={useColorModeValue('gray.700', 'white')}
            fontSize={'2xl'}
            fontFamily={'body'}>
            {name}
          </Heading>
          <Text color={'gray.500'}>
            {content}
          </Text>
        </Stack>
        <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
          <Avatar src={avatar} />
          <Stack direction={'column'} spacing={0} fontSize={'sm'}>
            <Text fontWeight={600}>{name}</Text>
            <Text color={'gray.500'}>{role}</Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
};

const TestimonialsSection = ({ scrollToResult }) => {
  return (
    <>
      <Center py={6} flexDirection="column">
        <Heading>Học viên yêu thích Lục Khí vì:</Heading>
        <Text>Đơn giản - An toàn - Hiệu quả</Text>
      </Center>
      <Box d="flex" flexWrap="wrap" justifyContent="center">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </Box>
      <Center py={6} flexDirection="column">
        <Button
          onClick={scrollToResult}
          colorScheme="yellow"
          variant="solid"
          size="lg"
          leftIcon={<Icon as={StarIcon} />}
          mb={4}
        >
          Và còn rất nhiều kết quả khác nữa
        </Button>
        <Button colorScheme="red" size="lg">
          Đăng Kí Ngay
        </Button>
      </Center>
    </>
  );
};

export default TestimonialsSection;
