'use client';

import { lazy, Suspense } from 'react';
import { IconStack2 } from '@tabler/icons-react';
import { Flex, Title } from '@mantine/core';
import dataStack from '@/components/MyStack/data.stack';
import ChildrenStyles from '@/components/utils/ChildrenStyles';
import { chakra } from '~/public/fonts';

const LazyCard = lazy(() => import('@/components/MyStack/MyStack-Card/Card'));

const MyStack = () => {
  return (
    <Flex gap={40} justify="center" direction="column">
      <Flex justify="center" align="center" gap={10}>
        <ChildrenStyles scale={1.5} c="grey">
          <IconStack2 />
        </ChildrenStyles>
        <Title id="MyStack" className={`${chakra.className}`} size="250%">
          My stack
        </Title>
      </Flex>
      <Flex wrap="wrap" gap={20} justify="center" align="center" w="100%">
        {dataStack.map((item, index) => (
          <Suspense key={index} fallback={<p>Load</p>}>
            <LazyCard
              text={item.text}
              description={item.description}
              imageIcon={item.imageIcon}
              alt={item.alt}
            />
          </Suspense>
        ))}
      </Flex>
    </Flex>
  );
};

export default MyStack;
