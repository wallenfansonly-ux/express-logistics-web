import { en } from './en';
import { fr } from './fr';
import { es } from './es';
import { de } from './de';
import { it } from './it';
import { pt } from './pt';
import { ar } from './ar';
import { zh } from './zh';
import { ja } from './ja';
import { ko } from './ko';
import { ru } from './ru';
import { tr } from './tr';
import { hi } from './hi';

export const translations = {
  en,
  fr,
  es,
  de,
  it,
  pt,
  ar,
  zh,
  ja,
  ko,
  ru,
  tr,
  hi
};

export const languages = [
  { code: 'en', name: 'English', nativeName: 'English', dir: 'ltr' },
  { code: 'fr', name: 'French', nativeName: 'Francais', dir: 'ltr' },
  { code: 'es', name: 'Spanish', nativeName: 'Espanol', dir: 'ltr' },
  { code: 'de', name: 'German', nativeName: 'Deutsch', dir: 'ltr' },
  { code: 'it', name: 'Italian', nativeName: 'Italiano', dir: 'ltr' },
  { code: 'pt', name: 'Portuguese', nativeName: 'Portugues', dir: 'ltr' },
  { code: 'ar', name: 'Arabic', nativeName: 'العربية', dir: 'rtl' },
  { code: 'zh', name: 'Chinese', nativeName: '中文', dir: 'ltr' },
  { code: 'ja', name: 'Japanese', nativeName: '日本語', dir: 'ltr' },
  { code: 'ko', name: 'Korean', nativeName: '한국어', dir: 'ltr' },
  { code: 'ru', name: 'Russian', nativeName: 'Русский', dir: 'ltr' },
  { code: 'tr', name: 'Turkish', nativeName: 'Turkce', dir: 'ltr' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', dir: 'ltr' }
];

export const getTranslation = (lang) => {
  return translations[lang] || translations.en;
};
