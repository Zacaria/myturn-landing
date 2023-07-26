import 'server-only';
import 'server-only';

interface DictionaryData {
  key: string;
}

type Dictionaries = Record<string, () => Promise<{} | DictionaryData>>;

const dictionaries: Dictionaries = {
  en: () => import('./dictionaries/en.json').then((module) => module.default),
  sr: () => import('./dictionaries/sr.json').then((module) => module.default),
};

export const getDictionary = async (locale: string) => dictionaries[locale]();

const getObjectProperty = (object: any, path: string) => {
  if (object == null) {
    // null or undefined
    return object;
  }
  const parts = path.split('.');
  return parts.reduce((object, key) => object?.[key], object);
};

// TODO : Add default value
// TODO : translate data.tsx
// export const i18n = async (data, locale) => {
//   const dict = await getDictionary(locale);

//   data;
// };
