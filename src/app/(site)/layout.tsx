'use client';
import LayoutSite from '@/components/layout/LayoutSite';
import { FC, ReactNode } from 'react';

interface ILayout {
  children: ReactNode;
}

const layout: FC<ILayout> = ({ children }) => {
  return (
    <LayoutSite>
      <main>{children}</main>
    </LayoutSite>
  );
};

export default layout;
