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
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        Ipsum passages, and more recently with desktop publishing software like
        Aldus PageMaker including versions of Lorem Ipsum.
      </p>
    </section>
  );
}
