/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable no-magic-numbers */
import React from 'react';

import Layout from '@/components/layout';
import { getCities } from '@/components/shared/api-queries';
import Title from '@/components/shared/ui/title';
import ProjectList from '@/components/widgets/project-list';

import cn from './style.module.sass';

function IndexPage({ city, projects }: any) {
    return (
        <Layout>
            <>
                <div
                    className={cn.banner}
                    style={{ background: `url(${city?.image}) center no-repeat` }}
                />
                <div className={cn.info}>
                    <Title customClass={cn.title} level={1} title={city.name} />
                    <p className={cn.description}>{city.description}</p>
                </div>
                <ProjectList projects={projects} />
            </>
        </Layout>
    );
}

export async function getServerSideProps({ params }: any) {
    const code = params.slug;

    const cityInfo = await getCities('', code);

    return {
        props: {
            city: cityInfo[0] || null,
            projects: [],
        },
    };
}

export default IndexPage;
