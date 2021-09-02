import React from 'react';
import { addDecorator, addParameters, configure } from '@storybook/react';
import {withKnobs} from '@storybook/addon-knobs';
import { I18nextProvider, translate } from 'react-i18next';
import i18next from 'i18next';

import sevensendersTheme from './sevensendersTheme';

const i18n = i18next.createInstance().init({
  fallbackLng: 'cimode',
  debug: false, // disable logging
  interpolation: {
    escapeValue: false,
  },
  react: {
    wait: false,
  },
});

translate.setI18n(i18n);

addParameters({
  options: {
    enableShortcuts: false,
    theme: sevensendersTheme,
    panelPosition: 'right',
  },
});

addDecorator(storyFn => (
  <I18nextProvider i18n={i18n}>
    {storyFn()}
  </I18nextProvider>
));

addDecorator(withKnobs);

configure(require.context('../src', true, /\.stories\.js$/), module);