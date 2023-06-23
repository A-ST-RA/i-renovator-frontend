/* eslint-disable no-secrets/no-secrets */
/* eslint-disable max-len */
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
import TopVoting from '@/components/widgets/TopVoting';

import cn from './style.module.sass';

function IndexPage({ project, projects }: any) {
    return (
        <Layout>
            <>
                <div className={cn.info}>
                    <Title customClass={cn.title} level={1} title="Детальная страница проекта" />
                    <p className={cn.description}>{project.description}</p>
                </div>
                <TopVoting {...project} customTitle="Обзор проекта" />
                <ProjectList projects={projects} customTitle="Еще проекты региона" />
            </>
        </Layout>
    );
}

export async function getServerSideProps({ params }: any) {
    const code = params.slug;

    const project = await getProjects('', code);
    const projects = await getProjects(project[0].city);

    return {
        props: {
            project: project[0],
            projects,
        },
    };
}

export default IndexPage;
