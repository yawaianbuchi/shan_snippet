import { useTranslation } from 'react-i18next';

export const useT = (key: string) => {
  const translate = useTranslation();

  return translate.t(key);
};
