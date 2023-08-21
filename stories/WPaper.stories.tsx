import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { WPaper, WPaperProps } from '../app/components/Paper';

const meta: Meta<typeof WPaper> = {
  component: WPaper,
  title: 'Components/WPaper',
  argTypes: {
    elevation: {
      control: 'number',
    },
    typePaper: {
      control: { type: 'radio', options: ['dark', 'white'] },
    },
  },
};

export default meta;
type Story = StoryObj<typeof WPaper>;

export const DarkPaper: Story = {
  render: (args: WPaperProps) => (
    <WPaper {...args}>This is a dark paper.</WPaper>
  ),
  args: {
    typePaper: 'dark',
    elevation: 12,
  },
};

export const WhitePaper: Story = {
  render: (args: WPaperProps) => (
    <WPaper {...args}>This is a white paper.</WPaper>
  ),
  args: {
    typePaper: 'white',
    elevation: 12,
  },
};
