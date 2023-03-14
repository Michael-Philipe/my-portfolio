import Typewriter from 'typewriter-effect';
import greenSpaceman from '/src/assets/green-spaceman.svg';

export default function About() {
  return (
    <section className='text-white mt-32 p-6 '>
      <h2 className='text-5xl font-title mb-4'>
        Olá, meu nome é <span style={{ color: '#4b55ff' }}>Michael</span>
      </h2>
      {/* <h2 className='text-4xl font-title'>
        <Typewriter
          options={{
            strings: ['Desenvolvedor FullStack'],
            autoStart: true,
            loop: true,
            delay: 120,
          }}
        />
      </h2> */}
      <p className='mt-8 text-2xl block max-w-4xl'>
        Busco me capacitar cada vez mais, para poder gerar um impacto positivo
        na vida de muitas pessoas. No momento estou focado em desenvolver minhas
        habilidades como um desenvolvedor Front-end e na busca de um emprego que
        possa me ajudar a aprimorar minhas skills e poder gerar mais valor para
        os clientes.
      </p>
    </section>
  );
}
