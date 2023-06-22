import React from 'react';

import ProjectCard from '@/components/entities/project-card';
import Title from '@/components/shared/ui/title';

import cn from './style.module.sass';

interface IProjectCardProps {
    votingImage: string;
    votingDetailsName: string;
    votingDetailsId: string;
    amountOfVotes: number;
}

interface IProjectList {
    projects: IProjectCardProps[];
    customTitle?: string;
}

function ProjectList({ projects, customTitle = 'Все проекты' }: IProjectList) {
    return (
        <div className={cn.wrapper}>
            <Title level={2} title={customTitle} />
            <div className={cn.projectList}>
                {projects.map((project, idx) => (
                    <div key={project.votingDetailsId} className={cn.project}>
                        <ProjectCard project={project} rankPlace={idx} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProjectList;
