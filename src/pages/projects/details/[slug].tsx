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
import { getCities } from '@/components/shared/api-queries';
import getProjects from '@/components/shared/api-queries/get-projects';
// import Title from '@/components/shared/ui/title';
import ProjectList from '@/components/widgets/project-list';
import TopVoting from '@/components/widgets/TopVoting';

import cn from './style.module.sass';

function IndexPage({ projects }: any) {
    return (
        <Layout>
            <>
                <div className={cn.info}>
                    {/* <Title customClass={cn.title} level={1} title={city.name} />
                    <p className={cn.description}>{city.description}</p> */}
                </div>
                <TopVoting
                    amountOfVotes={10}
                    dateOfEndVoting={new Date(2023, 6, 24, 18).toString()}
                    votingDetailsId={12}
                    votingDetailsName="Остановка"
                    votingImage="https://img.freepik.com/free-photo/blank-billboard-on-bus-stop-shelter-at-night_23-2147873358.jpg?w=1380&t=st=1687375988~exp=1687376588~hmac=de00443da811b08182ec61449ffdc6a3519759dbc634b10034c3d45bf2cf926b"
                    creator={{
                        id: 'dfsdfjshdfksdfh-sjkdfjsdhfksdhfj-sdfksjdfhjksdhfjksdhf',
                        imgSrc: 'data:image/jpeg;base64,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',
                        name: 'Иван Орлов',
                    }}
                />
                <ProjectList projects={projects} customTitle="Проекты Региона" />
            </>
        </Layout>
    );
}

export async function getServerSideProps({ params }: any) {
    const code = params.slug;

    const cityInfo = await getCities('', code);
    const projects = await getProjects(code);

    return {
        props: {
            city: cityInfo[0] || null,
            projects,
        },
    };
}

export default IndexPage;
