import React, { useState } from 'react';
import SectionContainer from './SectionContainer';
import Title from './Title';

function Education() {
  const [indice, setIndice] = useState(0);
  const [jobs, setJobs] = useState([
    {
      title: 'Peer Coach',
      name: 'Kenzie Academy Brasil',
      type: 'temporário',
      date: 'abr de 2021 - set de 2021 · 6 meses',
      address: 'estado,cidade, pais',
      description:
        'Facilitar a experiência dos novos alunos da Kenzie Academy dando suporte a equipe de ensino em rastrear e esclarecer as dúvidas que podem surgir no dia a dia de aprendizado, manter um contato mais próximo do aluno e assim deixando um ambiente mais humanizado.',
    },
    {
      title: 'Chapista',
      name: 'Mãozinha Burguer',
      type: 'Meio período',
      date: 'dez de 2019 - out de 2020 · 11 meses',
      address: 'estado,cidade, pais',
      description:
        'Atuava no preparo e montagem de lanches quentes, pratos rápidos e porções em geral. Responsável por organizar o local de trabalho, utensílios e geladeiras.',
    },
    {
      title: 'Montador',
      name: 'Jabil',
      type: 'Tempo integral',
      date: 'dez de 2018 - nov de 2019 · 1 ano',
      address: 'estado,cidade, pais',
      description:
        'Realizava a montagem manual e/ou mecânica dos componentes e subconjuntos eletrônicos envolvidos no processo de fabricação do produto, através de trabalhos contínuos nas diversas linhas de produção. Além de eventualmente, realizar serviços de separação, inspeção, embalagem e transporte interno de produtos acabados e acessórios.',
    },
  ]);

  const handleOptions = (indice) => {
    setIndice(indice);
  };

  return (
    <SectionContainer bg='bg-[#101214]'>
      <Title>
        <h2 className='text-5xl text-white'>Experiências</h2>
      </Title>
      <div className='text-white flex justify-between '>
        <div className='flex flex-col gap-4 text-center w-[20%] '>
          {jobs.map((job, index) => {
            return (
              <div
                key={index}
                className={`${
                  index === indice && 'bg-[#4b55ff]'
                } h-10 flex items-center pl-5 cursor-pointer`}
                onClick={() => handleOptions(index)}
              >
                <h2>{job.name}</h2>
              </div>
            );
          })}
        </div>
        <div className='w-[70%] h-[300px]'>
          <header className='flex justify-between mb-6'>
            <h2 className='text-3xl'>{jobs[indice].title}</h2>
            <p>{jobs[indice].date}</p>
          </header>
          <div>
            <h2 className='text-2xl mb-4'>{jobs[indice].name}</h2>
            <p>{jobs[indice].description}</p>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}

export default Education;
