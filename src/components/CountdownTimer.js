import React, { useState, useEffect, useCallback } from 'react';
import {
  Box,
  Text,
  Flex,
  Stack,
  CloseButton,
  useBreakpointValue,
} from '@chakra-ui/react';

const CountdownTimer = ({ onClose }) => {
  const [countDownTime, setCountDownTime] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
  });

  const getTimeDifference = (countDownTime) => {
    const currentTime = new Date().getTime();
    const timeDifference = countDownTime - currentTime;
    let days = Math.floor(timeDifference / (24 * 60 * 60 * 1000));
    days = days >= 10 ? days : `0${days}`;
    let hours = Math.floor((timeDifference % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60));
    hours = hours >= 10 ? hours : `0${hours}`;
    let minutes = Math.floor((timeDifference % (60 * 60 * 1000)) / (1000 * 60));
    minutes = minutes >= 10 ? minutes : `0${minutes}`;
    let seconds = Math.floor((timeDifference % (60 * 1000)) / 1000);
    seconds = seconds >= 10 ? seconds : `0${seconds}`;

    if (timeDifference < 0) {
      setCountDownTime({
        days: '00',
        hours: '00',
        minutes: '00',
        seconds: '00',
      });
      clearInterval();
    } else {
      setCountDownTime({
        days,
        hours,
        minutes,
        seconds,
      });
    }
  };

  const startCountDown = useCallback(() => {
    const countDownDate = new Date('2024-06-20T00:00:00').getTime();

    setInterval(() => {
      getTimeDifference(countDownDate);
    }, 1000);
  }, []);

  useEffect(() => {
    startCountDown();
  }, [startCountDown]);

  const direction = useBreakpointValue({ base: 'column', md: 'row' });
  const textAlign = useBreakpointValue({ base: 'center', md: 'left' });

  return (
    <Flex
      direction={direction}
      alignItems="center"
      bg="red.600"
      color="white"
      width="full"
      maxW="100vw"
      p={2}
      position="relative"
      boxShadow="md"
    >
      <Box flex="1" textAlign={textAlign}>
        <Text fontSize="xl" fontWeight="bold">
          Duy nhất trong năm. Hạn đăng kí
        </Text>
      </Box>
      <Box flex="1" textAlign="center">
        <Stack direction="row" spacing={4} justifyContent="center">
          <Box p={2} bg="red.800" borderRadius="md">
            <Text fontSize="4xl" fontWeight="bold">
              {countDownTime.days}
            </Text>
            <Text fontSize="xs">Ngày</Text>
          </Box>
          <Box p={2} bg="red.800" borderRadius="md">
            <Text fontSize="4xl" fontWeight="bold">
              {countDownTime.hours}
            </Text>
            <Text fontSize="xs">Giờ</Text>
          </Box>
          <Box p={2} bg="red.800" borderRadius="md">
            <Text fontSize="4xl" fontWeight="bold">
              {countDownTime.minutes}
            </Text>
            <Text fontSize="xs">Phút</Text>
          </Box>
          <Box p={2} bg="red.800" borderRadius="md">
            <Text fontSize="4xl" fontWeight="bold">
              {countDownTime.seconds}
            </Text>
            <Text fontSize="xs">Giây</Text>
          </Box>
        </Stack>
      </Box>
      <CloseButton position="absolute" right="8px" top="8px" onClick={onClose} />
    </Flex>
  );
};

export default CountdownTimer;
