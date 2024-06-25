"use client"
import { usePathname, useRouter } from 'next/navigation';
import { startTransition } from 'react';
import { useTranslation } from 'react-i18next';
import i18nConfig from '../../i18nConfig';

const useChangeLng = () => {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();

  const handleSelect = (v: { label: string; img?: string; value: string }) => {
    startTransition(() => {
      const newLocale = v.value;
      // set cookie for next-i18n-router
      const days = 30;
      const date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      const expires = date.toUTCString();
      document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

      // redirect to the new locale path

      if (currentLocale === i18nConfig.defaultLocale) {
        // router.push("/" + newLocale + currentPathname);
        router.push(currentPathname.replace(`/${currentLocale}`, `/${newLocale}`));
        //   router.push("/" + currentPathname);
      } else {
        router.push(currentPathname.replace(`/${currentLocale}`, `/${newLocale}`));
      }
      router.refresh();
    });
  };
  return { handleSelect, currentLocale };
};

export default useChangeLng;
