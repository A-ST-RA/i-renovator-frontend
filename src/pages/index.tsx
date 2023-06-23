/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable no-secrets/no-secrets */
/* eslint-disable sonarjs/no-duplicate-string */
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
import getUsers from '@/components/shared/api-queries/get-user';
import Greeting from '@/components/widgets/greeting';
import ProjectList from '@/components/widgets/project-list';
import TopAuthorsList from '@/components/widgets/TopAuthorsList';
import TopVoting from '@/components/widgets/TopVoting';

function IndexPage({ projects, authors }: any) {
    return (
        <Layout>
            <>
                <Greeting />
                <TopVoting {...projects[2]} />
                <TopAuthorsList authors={authors} />
                <ProjectList projects={projects} customTitle="Список проектов" />
            </>
        </Layout>
    );
}

export async function getServerSideProps() {
    const projects = await getProjects();
    const users = await getUsers();

    return {
        props: {
            projects,
            authors: users.slice(0, 5),
        },
    };
}

export default IndexPage;
