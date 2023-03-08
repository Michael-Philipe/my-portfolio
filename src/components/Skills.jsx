import React from 'react';
import CardSkills from './CardSkills';

import Title from './Title';
import htmlImg from '../assets/img/icomoon-free_html-five.svg';
import css3 from '../assets/img/fontisto_css3.svg';
import js from '../assets/img/akar-icons_javascript-fill.svg';
import tailwind from '../assets/img/file-icons_tailwind.svg';
import reactImg from '../assets/img/akar-icons_react-fill.svg';
import next from '../assets/img/logos_nextjs.svg';
import SectionContainer from './SectionContainer';

function Skills() {
  const skills = [
    {
      linkImg: htmlImg,
      alt: 'html logo',
    },
    {
      linkImg: css3,
      alt: 'css logo',
    },
    {
      linkImg: js,
      alt: 'javascript logo',
    },
    {
      linkImg: tailwind,
      alt: 'tailwind logo',
    },
    {
      linkImg: reactImg,
      alt: 'react logo',
    },
    {
      linkImg: next,
      alt: 'next logo',
    },
  ];
  return (
    <SectionContainer>
      <Title>
        <h2 className='text-5xl text-white'>Habilidades</h2>
      </Title>
      <div className='flex justify-between'>
        {skills.map((skill, index) => (
          <CardSkills key={index} link={skill.linkImg} alt={skill.alt} />
        ))}
      </div>
    </SectionContainer>
  );
}

export default Skills;
