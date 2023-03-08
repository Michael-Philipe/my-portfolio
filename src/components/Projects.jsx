import React from 'react';
import CardProject from './CardProject';
import SectionContainer from './SectionContainer';
import ghibli from '../assets/img/print_ghibli.png';

import Title from './Title';

function Projects() {
  const projects = [
    {
      projectTitle: 'Estudio Ghibli',
      tools: 'HTML, CSS, JS',
      linkImg: ghibli,
    },
    {
      projectTitle: 'Titulo do projeto',
      tools: 'HTML, CSS, JS',
      linkImg: '',
    },
    {
      projectTitle: 'Titulo do projeto',
      tools: 'HTML, CSS, JS',
      linkImg: '',
    },
    {
      projectTitle: 'Titulo do projeto',
      tools: 'HTML, CSS, JS',
      linkImg: '',
    },
    {
      projectTitle: 'Titulo do projeto',
      tools: 'HTML, CSS, JS',
      linkImg: '',
    },
    {
      projectTitle: 'Titulo do projeto',
      tools: 'HTML, CSS, JS',
      linkImg: '',
    },
  ];

  return (
    <SectionContainer className='relative'>
      <Title>
        <h2 className='text-white text-5xl'>Projetos</h2>
      </Title>
      <div className='flex flex-wrap justify-center gap-6 '>
        {projects.map((project, index) => (
          <CardProject
            key={index}
            title={project.projectTitle}
            tec={project.tools}
            img={project.linkImg}
          />
        ))}
      </div>
    </SectionContainer>
  );
}

export default Projects;
