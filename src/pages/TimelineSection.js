import React from 'react';
import {
  Box,
  Container,
  Stack,
  Text,
  VStack,
  HStack,
  Flex,
  Button,
  Icon,
  Center,
  useColorModeValue,
  Heading
} from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';

const timelineData = [
  {
    title: 'Giai đoạn 1',
    description: 'Học 10 bài Lục Khí Cơ Bản. Học thứ 3, thứ 5 hàng tuần.',
    video: 'https://www.youtube.com/embed/rsa9HQVY8ag',
  },
  {
    title: 'Giai đoạn 2',
    description: 'Học liên tục trọn đời vào thứ 6 hàng tuần trong chương trình Lục Khí Thực Hành cùng với gần 2000 thành viên Lục Khí.',
    video: 'https://www.youtube.com/embed/dgCXiEKK-NY',
  },
  {
    title: 'Giai đoạn 3',
    description: 'Xem hơn 110 video bài giảng Lục Khí chữa các bệnh thường gặp.',
    video: 'https://www.youtube.com/embed/KRdzUv0T2UQ',
  },
  {
    title: 'Giai đoạn 4',
    description: 'Ôn lại và cập nhật kiến thức bổ sung mỗi năm vào khóa Cơ Bản của năm tiếp theo.',
    video: null ,
  },
];

const TimelineItem = ({ title, description, video, isLast }) => {
  return (
    <Flex direction="column" align="center" mb={10} pos="relative">
      <HStack spacing={5} w="full" align="flex-start">
        <Flex
          align="center"
          justify="center"
          border="2px solid"
          borderColor="teal.500"
          borderRadius="full"
          width={12}
          height={12}
          position="relative"
          bg="white"
          zIndex={1}
          flexShrink={0}
        >
          <Box width={6} height={6} borderRadius="full" bg="teal.500" />
        </Flex>
        <VStack align="start" spacing={4} maxW="lg" w="full">
          <Text fontSize="lg" fontWeight="bold">
            {title}
          </Text>
          <Text>{description}</Text>
          {video && (
            <Box mt={4} width="100%">
              <iframe
                width="100%"
                height="300px"
                src={video}
                title={title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </Box>
          )}
        </VStack>
      </HStack>
      {!isLast && (
        <Box
          position="absolute"
          top="6"
          left="6"
          borderLeft="2px solid"
          borderColor="teal.500"
          height="calc(100% - 3rem)"
          zIndex={0}
        />
      )}
    </Flex>
  );
};

const TimelineSection = ({ onRegisterClick }) => {
  return (
    <Container maxW="5xl" py={12}>
      <VStack spacing={8} align="stretch">
      <Stack spacing={4} as={Box} textAlign={'center'}>
        <Heading fontSize={'3xl'}>LỘ TRÌNH HỌC TẤPJ</Heading>
      </Stack>
        {timelineData.map((item, index) => (
          <TimelineItem
            key={index}
            title={item.title}
            description={item.description}
            video={item.video}
            isLast={index === timelineData.length - 1}
          />
        ))}
        <Center mt={4}>
          <Button colorScheme="red" variant="solid" size="lg" onClick={onRegisterClick}>
            Đăng Kí Ngay
          </Button>
        </Center>
      </VStack>
    </Container>
  );
};

export default TimelineSection;
