import {
    Container,
    SimpleGrid,
    Flex,
    Heading,
    Text,
    Stack,
    StackDivider,
    Icon,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { IoCalendar, IoTime, IoSchool, IoPeople } from 'react-icons/io5';
  import React from 'react';
  
  const Feature = ({ text, icon, iconBg }) => {
    return (
      <Stack direction={'row'} align={'center'}>
        <Flex
          w={8}
          h={8}
          align={'center'}
          justify={'center'}
          rounded={'full'}
          bg={iconBg}>
          {icon}
        </Flex>
        <Text fontWeight={600}>{text}</Text>
      </Stack>
    );
  };
  
  export default function CoursesDetail() {
    return (
      <Container maxW={'5xl'} py={12}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Stack spacing={4}>
            <Text
              textTransform={'uppercase'}
              color={'blue.400'}
              fontWeight={600}
              fontSize={'sm'}
              bg={useColorModeValue('blue.50', 'blue.900')}
              p={2}
              alignSelf={'flex-start'}
              rounded={'md'}>
              Chi tiết khóa học
            </Text>
            <Heading>Thông tin khóa học Lục Khí</Heading>
            <Text color={'gray.500'} fontSize={'lg'}>
              Dưới đây là các thông tin chi tiết về khóa học Lục Khí.
            </Text>
            <Stack
              spacing={4}
              divider={
                <StackDivider
                  borderColor={useColorModeValue('gray.100', 'gray.700')}
                />
              }>
              <Feature
                icon={<Icon as={IoCalendar} color={'yellow.500'} w={5} h={5} />}
                iconBg={useColorModeValue('yellow.100', 'yellow.900')}
                text={'Thời gian khai giảng: 20/06/2024'}
              />
              <Feature
                icon={<Icon as={IoTime} color={'green.500'} w={5} h={5} />}
                iconBg={useColorModeValue('green.100', 'green.900')}
                text={'Thời gian học: 20 giờ thứ 3 và thứ 5 hàng tuần'}
              />
              <Feature
                icon={<Icon as={IoSchool} color={'purple.500'} w={5} h={5} />}
                iconBg={useColorModeValue('purple.100', 'purple.900')}
                text={'Hình thức học: Online qua Zoom'}
              />
              <Feature
                icon={<Icon as={IoPeople} color={'teal.500'} w={5} h={5} />}
                iconBg={useColorModeValue('teal.100', 'teal.900')}
                text={'Thời lượng học: 10 buổi'}
              />
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    );
  }
  
