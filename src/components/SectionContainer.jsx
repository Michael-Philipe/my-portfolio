import React from 'react';

function SectionContainer({ children, bg }) {
  return (
    <section className={`relative py-8 ${bg}`}>
      <div className={`max-w-[1280px] mx-auto`}>{children}</div>
    </section>
  );
}

export default SectionContainer;
