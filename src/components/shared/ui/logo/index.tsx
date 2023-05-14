import Link from 'next/link';
import React from 'react';

import cn from './style.module.sass';

function Logo() {
    return (
        <Link href="/" className={cn.logo}>
            Я Реноватор
        </Link>
    );
}

export default Logo;
