import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import CitySearch from '@/components/features/city-search';
import Button from '@/components/shared/ui/button';

import cn from './style.module.sass';

function Header() {
    return (
        <div className={cn.wrapper}>
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
                    <div className={cn.actionSelect}>
                        <CitySearch />
                    </div>
                    <div className={cn.actionLogin}>
                        <Link href="/auth/login">
                            <Button text="Вход/Регистрация" customClass={cn.actionButton} />
                        </Link>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Header;
