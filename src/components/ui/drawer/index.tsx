'use client';

import React, { PropsWithChildren } from 'react';
// import Drawer from './Drawer';
import DynamicDrawer from './DynamicDrawer';
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
      pathname === `/${locale}` ||
      pathname === '/login' ||
      pathname === '/' ||
      pathname === '/signup' ||
      pathname === '/forget-pass' ||
      pathname === '/pass-reset' ? (
        children
      ) : (
        <DynamicDrawer {...rest}>{children}</DynamicDrawer>
      )}
    </div>
  );
};

export default PageLayout;
