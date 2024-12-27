import { FC } from 'react';
import Link from 'next/link';
import { Flex } from '@mantine/core';
import { useViewportSize } from '@mantine/hooks';
import table from '@/components/adaptiveTable';
import ChildrenStyles from '@/components/utils/ChildrenStyles';
import { AnchorPropsSchema, AnchorPropsType } from '@/types/zodTypes/header.types';

const HeaderAnchor: FC<{ data: AnchorPropsType }> = ({ data }) => {
  const { width } = useViewportSize();
  AnchorPropsSchema.parse(data);
  return data.map((item, index) => (
    <Flex gap={5} key={index}>
      {width > table.xs && (
        <ChildrenStyles className="Header-Icon" c="gray">
          {item.icon}
        </ChildrenStyles>
      )}

      <Link
        className="Header-Anchor"
        style={{ fontWeight: '500', textAlign: 'center' }}
        href={item.src}
      >
        {item.text}
      </Link>
    </Flex>
  ));
};
export default HeaderAnchor;
