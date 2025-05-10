import type { Preview } from '@storybook/react';
import '../src/styles/index.css';
import './preview.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: 'padded',
  },
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        icon: 'paintbrush',
        items: [
          { value: 'light', title: 'Light' },
          { value: 'dark', title: 'Dark' },
          { value: 'theme-uswds', title: 'USWDS' },
        ],
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const classList = document.documentElement.classList;
      classList.remove('light', 'dark', 'theme-uswds');
      classList.add(context.globals.theme);
      return Story();
    },
  ],
};

export default preview;
