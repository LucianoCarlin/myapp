// WButton.stories.tsx

import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { WButton, WButtonProps } from '../app/components/Button';

const meta: Meta<typeof WButton> = {
  component: WButton,
  title: 'Components/WButton',
  argTypes: {
    variant: {
      control: { type: 'radio', options: ['contained', 'outlined', 'text'] },
    },
    textButton: {
      control: 'text',
    },
    color: {
      control: {
        type: 'select',
        options: [
          'error',
          'info',
          'warning',
          'inherit',
          'primary',
          'secondary',
          'success',
        ],
      },
    },
    // ... Add more argTypes as needed
  },
};

export default meta;
type Story = StoryObj<typeof WButton>;

export const PrimaryContainedButton: Story = (args: WButtonProps) => (
  <WButton {...args} textButton="Primary Contained Button" />
);
PrimaryContainedButton.args = {
  variant: 'contained',
  color: 'primary',
};

export const SecondaryOutlinedButton: Story = (args: WButtonProps) => (
  <WButton {...args} textButton="Secondary Outlined Button" />
);
SecondaryOutlinedButton.args = {
  variant: 'outlined',
  color: 'secondary',
};

// ... Define more stories as needed
