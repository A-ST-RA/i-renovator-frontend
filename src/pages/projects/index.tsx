/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable no-magic-numbers */
import React from 'react';

import Layout from '@/components/layout';
import getProjects from '@/components/shared/api-queries/get-projects';
import Title from '@/components/shared/ui/title';
import ProjectList from '@/components/widgets/project-list';

import cn from './style.module.sass';

function IndexPage({ projects }: any) {
    return (
        <Layout>
            <>
                <div className={cn.info}>
                    <Title customClass={cn.title} level={1} title="Все проекты платформы" />
                </div>
                <ProjectList projects={projects} customTitle="" />
            </>
        </Layout>
    );
}

export async function getServerSideProps() {
    const projects = await getProjects();

    return {
        props: {
            projects,
        },
    };
}

export default IndexPage;
