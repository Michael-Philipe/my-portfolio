import React from 'react';

function CardSkills({ link, alt }) {
  return (
    <div className='flex items-center justify-center w-[9.375rem] h-[9.375rem] border border-solid border-[#333333]'>
      <img src={link} alt={alt} />
    </div>
  );
}

export default CardSkills;
