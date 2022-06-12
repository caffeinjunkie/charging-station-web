import i18n from 'i18next';

import en from './en.json'
import nl from './nl.json'

i18n.init({
  resources: {
    en: {
      translation: en
    },
    nl: {
      translation: nl
    }
  }
});

export default i18n;
