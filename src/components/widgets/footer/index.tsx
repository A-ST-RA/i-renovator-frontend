import React from 'react';

import cn from './style.module.sass';

function Footer() {
    return (
        <footer className={cn.footer}>
            <div className={cn.container}>
                <div className={cn.footerContent}>
                    <nav className={cn.footerNav}>
                        <a href="#about" className={cn.footerLink}>
                            О нас
                        </a>
                        <a href="mailto:astrax200469@gmail.com" className={cn.footerLink}>
                            astrax200469@gmail.com
                        </a>
                    </nav>
                    <p className={cn.footerCopy}>&copy; ЯРеноватор 2023. Все права защищены.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
