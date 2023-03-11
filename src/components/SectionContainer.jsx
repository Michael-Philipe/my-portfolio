import React from 'react';

function SectionContainer({ children, bg, maxHeight = 1280 }) {
  return (
    <section className={`relative py-8 ${bg}`}>
      <div className={`max-w-[${maxHeight}px] mx-auto`}>{children}</div>
    </section>
  );
}

export default SectionContainer;
