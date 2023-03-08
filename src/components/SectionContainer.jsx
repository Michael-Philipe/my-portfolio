import React from 'react';

function SectionContainer({ children }) {
  return (
    <section className='relative max-w-[1280px] mx-auto mt-32'>
      {children}
    </section>
  );
}

export default SectionContainer;
