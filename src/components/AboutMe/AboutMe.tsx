'use client';

import { memo } from 'react';
import { domAnimation, LazyMotion } from 'motion/react';
import * as m from 'motion/react-m';
import { Flex, Space, Text } from '@mantine/core';
import { DataPropsElement } from '@/components/AboutMe/types';
import ChildrenStyles from '@/components/utils/ChildrenStyles';

const AboutMe = memo(({ data }: { data: DataPropsElement[] }) => {

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        id="about-me "
        style={{
          width: '80%',
          borderRadius: '5px',
          border: '2px solid gray',
          padding: 5,
          opacity: 0,
          background: '#090909',
        }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="light-block noisy"
      >
        {data.map((item, index) => (
          <Flex
            wrap="nowrap"
            style={{ borderRadius: 5 }}
            p={5}
            key={index}
            direction={{ base: 'column', xs: 'row', sm: 'row' }}
            align={{ base: 'center', sm: 'center' }}
          >
            <ChildrenStyles  c="gray" p={5} rounded={5}>
              {item.icon}
            </ChildrenStyles>
            <Space w={{ base: '0', md: '20px', sm: '20px' }} />
            <Text c="gray">{item.text}</Text>
          </Flex>
        ))}
      </m.div>
    </LazyMotion>
  );
});
export default AboutMe;
