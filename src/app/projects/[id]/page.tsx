import React from 'react';
import { projects } from '@/assets/assets';
import { slugify } from '@/utils/slugify';
import ProjectClient from './ProjectClient';

export async function generateStaticParams() {
    return projects.map((project) => ({
        id: slugify(project.title),
    }));
}

export default async function ProjectPage(props: { params: Promise<{ id: string }> }) {
    const params = await props.params;
    const { id } = params;

    const project = projects.find(p => slugify(p.title) === id);

    return <ProjectClient project={project} />;
}
