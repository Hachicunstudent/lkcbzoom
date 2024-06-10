import React from 'react';
import PropTypes from 'prop-types';
import { Box, SimpleGrid, Icon, Text, Stack, Flex, Heading, Button } from '@chakra-ui/react';
import { FaFemale, FaUserAlt, FaHeartbeat } from 'react-icons/fa';
import { FcBusinesswoman, FcNightPortrait, FcReading } from 'react-icons/fc';

const Feature = ({ title, text, icon }) => {
  return (
    <Stack align={'center'}>
      <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={'gray.100'}
        mb={1}>
        {icon}
      </Flex>
      <Text fontWeight={600} textAlign={'center'}>{title}</Text>
      <Text color={'gray.600'} textAlign={'center'}>{text}</Text>
    </Stack>
  );
};

Feature.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
};

export default function TargetAudience({ onRegisterClick }) {
  return (
    <Box p={8}>
      <Stack spacing={4} as={Box} textAlign={'center'}>
        <Heading fontSize={'3xl'}>LỤC KHÍ PHÙ HỢP VỚI AI?</Heading>
      </Stack>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} mt={8}>
        <Feature
          icon={<Icon as={FcBusinesswoman} w={10} h={10} />}
          title={'Phụ nữ'}
          text={'Chăm sóc sức khỏe gia đình'}
        />
        <Feature
          icon={<Icon as={FcNightPortrait} w={10} h={10} />}
          title={'Người già'}
          text={'Tự chữa bệnh'}
        />
        <Feature
          icon={<Icon as={FcReading} w={10} h={10} />}
          title={'Người đam mê đông y'}
          text={'Tự chữa bệnh'}
        />
      </SimpleGrid>
      <Stack mt={8} align={'center'}>
        <Button 
          colorScheme="red" 
          variant="solid" 
          onClick={onRegisterClick}
        >
          Đăng Kí Ngay
        </Button>
      </Stack>
    </Box>
  );
}

TargetAudience.propTypes = {
  onRegisterClick: PropTypes.func.isRequired,
};
