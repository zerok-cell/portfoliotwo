import { IconAddressBook, IconStack2, IconStar } from '@tabler/icons-react';
import { AnchorPropsType } from '@/types/zodTypes/header.types';

const data: AnchorPropsType = [
  { src: '#about-me', icon: <IconStar className="icon" />, text: 'About me' },
  { src: '#MyStack', icon: <IconStack2 className="icon" />, text: 'My stack' },
  { src: '#Footer', icon: <IconAddressBook className="icon" />, text: 'Contact' },
];

export default data;
