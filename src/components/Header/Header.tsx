'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useAnimate } from 'motion/react';
import { Flex, Grid } from '@mantine/core';
import data from '@/components/Header/data';
import HeaderAnchor from '@/components/Header/Header-AnchorLinks/Header-Anchor';
import logotype from '~/public/logotype.svg';

const Header = () => {
  const [scope, animate] = useAnimate();
  const [cssLoad, setCssLoad] = useState(false);
  useEffect(() => {
    import('./header.scss').then(() => {
      setCssLoad(true);
      cssLoad && animate(scope.current, { borderWidth: '1px' });
      cssLoad && animate('*', { opacity: '100%' }, { duration: 1 });
    });
  });

  return (
    cssLoad && (
      <Grid
        bg="rgba(255,255,255,0)"
        columns={12}
        id="header"
        className="Header Header_noisy"
        ref={scope}
        justify="start"
        align="center"
      >
        <Grid.Col visibleFrom="sm" span="content">
          <Image width={40} className="Header-Logotype" src={logotype} alt="logotype" />
        </Grid.Col>

        <Grid.Col span={{ sm: 10, base: 11, md: 11 }}>
          <Flex
            gap={40}
            h={{
              base: '4rem',
            }}
            color="white"
            ml="5%"
            justify="center"
            align="center"
          >
            <HeaderAnchor data={data} />
          </Flex>
        </Grid.Col>
      </Grid>
    )
  );
};

export default Header;
