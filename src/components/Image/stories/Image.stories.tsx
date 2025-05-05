import type { Meta, StoryObj } from '@storybook/react';
import { Image } from '../src/Image';

const meta = {
  title: 'Components/Image',
  component: Image,
  parameters: {},
  tags: ['autodocs'],
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * The default state of the Image component.
 * Shows a basic image with lazy loading enabled.
 */
export const Default: Story = {
  args: {
    src: 'https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg',
    alt: 'A beautiful landscape',
    width: 800,
    height: 400,
  },
};

/**
 * Image with eager loading.
 * Demonstrates immediate loading without lazy loading behavior.
 */
export const EagerLoading: Story = {
  args: {
    src: 'https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg',
    alt: 'A beautiful landscape',
    isLazy: false,
    width: 800,
    height: 400,
  },
};

/**
 * Image with fallback.
 * Shows how the component handles loading errors by displaying a fallback image.
 */
export const WithFallback: Story = {
  args: {
    src: 'invalid-url.jpg',
    fallback: 'https://images.pexels.com/photos/1526/dark-blur-blurred-gradient.jpg',
    alt: 'Image with fallback',
    width: 800,
    height: 400,
  },
};

/**
 * Image with rounded corners.
 * Shows the image with rounded corners using the shape prop.
 */
export const Rounded: Story = {
  args: {
    src: 'https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg',
    alt: 'A beautiful landscape',
    width: 400,
    height: 400,
    shape: 'rounded',
  },
};

/**
 * Circular image.
 * Shows the image in a circular shape.
 */
export const Circle: Story = {
  args: {
    src: 'https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg',
    alt: 'A beautiful landscape',
    width: 400,
    height: 400,
    shape: 'circle',
  },
};

/**
 * Image with custom dimensions and styling.
 * Demonstrates how to customize the image appearance.
 */
export const CustomStyle: Story = {
  args: {
    src: 'https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg',
    alt: 'A beautiful landscape',
    width: 400,
    height: 300,
    className: 'rounded-lg shadow-lg',
  },
};
