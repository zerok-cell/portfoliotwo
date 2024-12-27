'use client';

import { memo } from 'react';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { Card, Text, Title } from '@mantine/core';
import MyStackPhoto from '@/components/MyStack/MyStack-Photo/MyStack-Photo';
import { ImagesTextDataType, ImagesTextDatSchema } from '@/types/zodTypes/types.mystack';
import { chakra } from '~/public/fonts';

import '@/styles/card-glare.scss';

const CardMyStack = memo(
  ({ text, imageIcon, description, alt }: ImagesTextDataType<StaticImport>) => {
    ImagesTextDatSchema.parse({ text, description, alt });
    return (
      <Card className="MyStack-Card MyStack-Card_noisy">
        <MyStackPhoto imageIcon={imageIcon} alt={alt} />
        <Title className={`${chakra.className}`}>
          <span style={{ color: 'var(--color-blue)' }}>{text?.slice(0, 1)}</span>
          {text?.slice(1)}
          <hr />
        </Title>
        <Text>{description}</Text>
      </Card>
    );
  }
);

export default CardMyStack;
