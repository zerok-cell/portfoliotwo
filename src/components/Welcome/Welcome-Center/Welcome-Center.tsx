'use client';

import '~/public/buttons.scss';

import { useEffect } from 'react';
import { useAnimateMini } from 'motion/react';
import { Button, Flex, Text, Title } from '@mantine/core';
import { useOs } from '@mantine/hooks';
import dataOs from '@/components/Welcome/data-os';
import Github from '@/components/Welcome/Welcome-Github/Welcome-Github';
import { chakra } from '~/public/fonts';

const WelcomeCenter = () => {
  const [scope, animate] = useAnimateMini();
  const os = useOs();

  useEffect(() => {
    animate(
      scope.current,
      { marginRight: 0, opacity: [0.1, 0.3, 0.3, 0.5, 1], gap: 0 },
      { duration: 1 }
    );
  }, []);

  return (
    <>
      <Flex
        opacity={0}
        ref={scope}
        columnGap={{ base: 0, sm: 80 }}
        gap={900}
        justify="center"
        align="center"
        direction="row"
        wrap="nowrap"
      >
        <Flex gap={2} direction="column" justify="center">
          <Text>Shakhsinov Murad 💤</Text>
          <Title
            w={{ base: 'min-content', sm: 'max-content' }}
            className={`${chakra.className} gradient`}
          >
            Welcome to my portfolio
          </Title>
          <Flex
            wrap="nowrap"
            mr={{ base: 20, sm: 0 }}
            w="max-content"
            align="center"
            gap={5}
            direction="row"
          >
            {dataOs[os]}
            <Text> Hello {os} user </Text>
          </Flex>
        </Flex>
        <Github />
      </Flex>
    </>
  );
};

export default WelcomeCenter;
