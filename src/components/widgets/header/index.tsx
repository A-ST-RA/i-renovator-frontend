import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import cn from './style.module.sass';

function Header() {
    return (
        <header className={cn.header}>
            <Image
                className={cn.logo}
                src="/images/svg/i-renovator-logo.svg"
                alt="Я реноватор Лого"
                width={153}
                height={45}
            />
            <nav className={cn.navigation}>
                <ul className={cn.menuList}>
                    <li className={cn.menuLink}>
                        <Link href="/projects">Проекты</Link>
                    </li>
                    <li className={cn.menuLink}>
                        <Link href="/about">О нас</Link>
                    </li>
                    <li className={cn.menuLink}>
                        <Link href="/authors">Авторы</Link>
                    </li>
                </ul>
            </nav>
            <div className={cn.actions}>
                <div className={cn.actionSelect}>wip select</div>
            </div>
        </header>
    );
}

export default Header;
