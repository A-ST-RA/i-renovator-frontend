/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-misused-promises */

import React from 'react';

import Layout from '@/components/layout';
import Title from '@/components/shared/ui/title';

import cn from './style.module.sass';

function About() {
    return (
        <Layout>
            <div className={cn.info}>
                <Title customClass={cn.title} level={1} title="О нас" />
                <p className={cn.description}>
                    Привет! Мы - компания ЯРеноватор, и наша миссия заключается в содействии благоустройству регионов. Мы занимаемся проектированием, строительством и ремонтом объектов инфраструктуры, таких как дороги, мосты, парки, скверы и т.д. Наша команда состоит из профессионалов в различных областях, и мы готовы предложить индивидуальный подход к каждому проекту, чтобы обеспечить максимальную эффективность и качество наших работ. Мы уверены, что наша работа не только улучшает качество жизни граждан, но и способствует развитию экономики регионов.
                </p>
            </div>
        </Layout>
    );
}

export default About;
