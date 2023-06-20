/* eslint-disable @next/next/no-html-link-for-pages */
import React, { useState } from 'react';

import cn from './style.module.sass';

function BurgerMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={cn.burgerMenu}>
            <button type="button" className={cn.burgerMenuButton} onClick={handleToggle}>
                <span className={cn.burgerMenuIcon} />
            </button>
            {isOpen && (
                <div className={cn.burgerMenuItems}>
                    <a href="/" className={cn.burgerMenuItem}>
                        Главная
                    </a>
                    <a href="/about" className={cn.burgerMenuItem}>
                        О нас
                    </a>
                    <a href="/contacts" className={cn.burgerMenuItem}>
                        Контакты
                    </a>
                </div>
            )}
        </div>
    );
}

export default BurgerMenu;
