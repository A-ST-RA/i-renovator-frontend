import React from 'react';

import Title from '@/components/shared/ui/title';

import cn from './style.module.sass';

function Greeting() {
    return (
        <div className={cn.greeting}>
            <Title title="Новая креативная платформа" level={1} customClass={cn.title} />
            <p className={cn.description}>Создавай, изменяй, совершенствуй</p>
        </div>
    );
}

export default Greeting;
