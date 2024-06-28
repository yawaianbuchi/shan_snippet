import type { Metadata } from 'next';
import React from 'react';
import { inter } from '@/font';
import TranslationsProvider from '@/provider/TranslationProvider';
import PageLayout from '@/components/ui/drawer';
import Provider from './provider';
import initTranslations from '@/app/i18n';
import { LANG_NAMESPACE } from '@/constants/namespace';

import '@/style/globals.css';
import '@/style/main.css';

export const metadata: Metadata = {
  title: 'Shan Gaming',
  description: 'Shan Gaming',
  icons: {
    icon: '/favicon.ico',
  },
};

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { resources } = await initTranslations(locale, LANG_NAMESPACE);
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <TranslationsProvider namespaces={LANG_NAMESPACE} locale={locale} resources={resources}>
            <PageLayout>{children}</PageLayout>
          </TranslationsProvider>
        </Provider>
      </body>
    </html>
  );
}
