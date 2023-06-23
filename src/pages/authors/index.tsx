import React from 'react';

import Layout from '@/components/layout';
import Title from '@/components/shared/ui/title';

import cn from './style.module.sass';

function About() {
    return (
        <Layout>
            <div className={cn.info}>
                <Title customClass={cn.title} level={1} title="Авторы проекта" />
                <p className={cn.description}>Немного о команде разработки</p>

                <Title customClass={cn.title} level={2} title="Бекендр Разработчик" />
                <p className={cn.description}>
                    Привет! Меня зовут Ирина Макеева, я бекенд разработчик проекта ЯРеноватор Мой
                    стек это Docker, NestJS, PostgreSQL
                </p>
                <Title customClass={cn.title} level={2} title="Фронтенд Разработчик" />
                <p className={cn.description}>
                    Привет! Я Владислав, фронтенд разработчик проекта ЯРеноватор Мой стек это
                    NextJS, SaSS, MobX, Axios
                </p>
            </div>
        </Layout>
    );
}

export default About;
