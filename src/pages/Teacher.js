import {
    Container,
    SimpleGrid,
    Image,
    Flex,
    Heading,
    Text,
    Stack,
    StackDivider,
    Icon,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { MdLocalHospital, MdSchool, MdBook } from 'react-icons/md';
  import { ReactElement } from 'react';
  
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
  
  export default function Teacher() {
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
              Giảng viên
            </Text>
            <Heading>Bác sĩ Vũ Đức Đại</Heading>
            <Text color={'gray.500'} fontSize={'lg'}>
              Đông Tây Y kết hợp. Đông Y dẫn đường. Tây Y bổ trợ.
            </Text>
            <Stack
              spacing={4}
              divider={
                <StackDivider
                  borderColor={useColorModeValue('gray.100', 'gray.700')}
                />
              }>
              <Feature
                icon={<Icon as={MdLocalHospital} color={'yellow.500'} w={5} h={5} />}
                iconBg={useColorModeValue('yellow.100', 'yellow.900')}
                text={'Am hiểu về Tây Y'}
              />
              <Feature
                icon={<Icon as={MdBook} color={'green.500'} w={5} h={5} />}
                iconBg={useColorModeValue('green.100', 'green.900')}
                text={'Chuyên sâu về Đông Y'}
              />
              <Feature
                icon={<Icon as={MdSchool} color={'purple.500'} w={5} h={5} />}
                iconBg={useColorModeValue('purple.100', 'purple.900')}
                text={'10 năm nghiên cứu và đào tạo Lục Khí'}
              />
            </Stack>
          </Stack>
          <Flex direction="column" align="center">
            <Image
              rounded={'md'}
              alt={'Giảng viên - Bác sĩ Vũ Đức Đại'}
              src={
                'bsdai.jpg'
              }
              objectFit={'cover'}
            />
            <Text mt={4} color={'gray.500'} fontSize={'sm'}>
              Hình ảnh bác sĩ Đại tham gia ca phẫu thuật tại bệnh viện Việt Đức
            </Text>
          </Flex>
        </SimpleGrid>
      </Container>
    );
  }
  