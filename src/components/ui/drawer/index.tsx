'use client';

import React, { PropsWithChildren } from 'react';
import Drawer from './Drawer';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';

interface PageLayoutProps extends PropsWithChildren {
  title?: string;
}
const PageLayout: React.FC<PageLayoutProps> = ({ children, ...rest }: PageLayoutProps) => {
  const pathname = usePathname();
  const { i18n } = useTranslation();
  const locale = i18n.language;

  return (
    <div>
      {pathname === `/${locale}/login` ||
      pathname === `/${locale}/signup` ||
      pathname === `/${locale}/forget-pass` ||
      pathname === `/${locale}/pass-reset` ||
      pathname === '/login' ||
      pathname === '/signup' ||
      pathname === '/forget-pass' ||
      pathname === '/pass-reset' ? (
        children
      ) : (
        <Drawer {...rest}>{children}</Drawer>
      )}
    </div>
  );
};

export default PageLayout;
