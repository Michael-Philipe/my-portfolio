import React from 'react';

function SectionContainer({ children, bg }) {
  return (
    <section className={`relative py-16 ${bg} bg-opacity-75`}>
      <div className={`max-w-[1280px] mx-auto pl-6`}>{children}</div>
    </section>
  );
}

export default SectionContainer;
