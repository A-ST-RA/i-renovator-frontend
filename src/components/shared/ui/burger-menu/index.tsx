/* eslint-disable @next/next/no-html-link-for-pages */
import clsx from 'clsx';
import React, { useState } from 'react';

import cn from './style.module.sass';

interface IBurgerMenuProps {
    children: React.ReactElement;
}

function BurgerMenu({ children }: IBurgerMenuProps) {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={cn.burgerMenu}>
            <button type="button" className={cn.burgerMenuButton} onClick={handleToggle}>
                <span className={clsx(cn.burgerMenuIcon, isOpen && cn.burgerMenuIconActive)} />
            </button>
            {isOpen && <div className={cn.burgerMenuItems}>{children}</div>}
        </div>
    );
}

export default BurgerMenu;
