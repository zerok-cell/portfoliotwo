import type { Meta, StoryObj } from '@storybook/react';

import FooterButtonSocial from './Footer-ButtonSocial'
import {IconBrandTelegram} from "@tabler/icons-react";
const meta = {
    component: FooterButtonSocial,
    argTypes: { hintText: { control: 'text', description: 'Подсказка для кнопки', }, linkText: { control: 'text', description: 'URL для перенаправления', }, action: { control: 'select', options: ['copy', 'redirect'], description: 'Действие при клике', }, copiedTextDisplay: { control: 'text', description: 'Текст для отображения при копировании', }, displayText: { control: 'text', description: 'Текст или ReactNode для отображения', }, },
} satisfies Meta<typeof FooterButtonSocial>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        displayText:<IconBrandTelegram/>,
        linkText:'https://t.me/zerokcell',
        hintText:'Go to my telegram @zerokcell',
        action:'redirect'

    },
};