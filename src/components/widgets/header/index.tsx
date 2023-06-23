import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import CitySearch from '@/components/features/city-search';
import useToken from '@/components/shared/hooks/use-token';
import BurgerMenu from '@/components/shared/ui/burger-menu';
import Button from '@/components/shared/ui/button';

import cn from './style.module.sass';

function Header() {
    const token = useToken();

    return (
        <div className={cn.wrapper}>
            <header className={cn.header}>
                <Link href="/">
                    <Image
                        className={cn.logo}
                        src="/images/svg/i-renovator-logo.svg"
                        alt="Я реноватор Лого"
                        width={153}
                        height={45}
                    />
                </Link>
                <nav className={clsx(cn.navigation, cn.desktopNavigation)}>
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
                <div className={cn.burgerMenu}>
                    <BurgerMenu>
                        <>
                            <Link href="/" className={cn.burgerMenuItem}>
                                Главная
                            </Link>
                            <Link href="/about" className={cn.burgerMenuItem}>
                                О нас
                            </Link>
                            {token ? (
                                <Link href="/projects/create">Создать</Link>
                            ) : (
                                <Link
                                    href="/auth/login"
                                    className={clsx(cn.burgerMenuItem, cn.login)}
                                >
                                    Вход/Регистрация
                                </Link>
                            )}
                            <Link href="/auth/login" className={clsx(cn.burgerMenuItem, cn.login)}>
                                Вход/Регистрация
                            </Link>
                            <CitySearch />
                        </>
                    </BurgerMenu>
                </div>
                <div className={cn.actions}>
                    <div className={cn.actionSelect}>
                        <CitySearch />
                    </div>
                    <div className={cn.actionLogin}>
                        {token ? (
                            <Link href="/projects/create">
                                <Button text="Создать" customClass={cn.actionButton} />
                            </Link>
                        ) : (
                            <Link href="/auth/login">
                                <Button text="Вход/Регистрация" customClass={cn.actionButton} />
                            </Link>
                        )}
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Header;
