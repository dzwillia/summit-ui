import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming/create';
import './manager.css';

const theme = create({
  base: 'light',
  brandTitle: 'Summit UI',
  brandUrl: 'https://github.com/dzwillia/summit-ui',
  brandTarget: '_blank',
});

addons.setConfig({
  theme,
  sidebar: {
    showRoots: true,
  },
});
