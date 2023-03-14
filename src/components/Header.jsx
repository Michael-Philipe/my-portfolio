import About from './About';
import ItemList from './ItemList';

export default function Header() {
  const itensNavigation = [
    'projetos',
    'habilidades',
    'experiências',
    'contato',
  ];

  return (
    <header className='relative'>
      <nav className=''>
        <div className='max-w-[80rem] h-auto mx-auto flex justify-between py-8 px-6'>
          <div className='text-white text-4xl font-title'>
            <p>Portfólio</p>
          </div>
          <ul className='text-white flex gap-2 text-xl items-center'>
            {itensNavigation.map((content, indice) => (
              <ItemList key={indice} item={content} />
            ))}
          </ul>
        </div>
      </nav>
      <div className='max-w-[80rem] mx-auto relative'>
        <About />
      </div>
    </header>
  );
}
