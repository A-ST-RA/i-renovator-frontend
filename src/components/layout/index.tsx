import React from 'react';

import Footer from '@/components/widgets/footer';
import Header from '@/components/widgets/header';

import cn from './styles.module.sass';

interface ILayoutProps {
    children: React.ReactElement;
}

function Layout({ children }: ILayoutProps) {
    return (
        <div className={cn.container}>
            <Header />
            <main className={cn.main}>{children}</main>
            <Footer />
        </div>
    );
}

export default Layout;
