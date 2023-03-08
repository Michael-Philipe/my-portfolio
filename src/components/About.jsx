import Typewriter from 'typewriter-effect';
import greenSpaceman from '/src/assets/green-spaceman.svg';

export default function About() {
  return (
    <section className='text-white mt-32 p-6 '>
      {/* <img
        className='animate-bounce h-52 absolute bottom-0 right-0'
        src={greenSpaceman}
        alt='green spaceman'
      /> */}

      <h1 className='text-5xl font-title'>
        <Typewriter
          options={{
            strings: [
              'Olá, meu nome é <span style="color: #4b55ff;">Michael</span>',
              'Desenvolvedor FullStack',
            ],
            autoStart: true,
            loop: true,
            delay: 120,
          }}
        />
      </h1>
      <p className='mt-8 text-2xl block max-w-4xl'>
        Busco me capacitar cada vez mais, para poder gerar um impacto positivo
        na vida de muitas pessoas. Tenho muita vontade de aprender novas
        línguas, conhecer novos lugares e praticar fotografia como hobby. No
        momento estou focado em desenvolver minhas habilidades como um
        desenvolvedor Front-end e na busca de uma oportunidade que possa me
        ajudar a aprimorar minhas skills e poder gerar mais valor para os
        clientes.
      </p>
    </section>
  );
}
