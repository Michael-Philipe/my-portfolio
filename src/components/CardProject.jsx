import React from 'react';

function CardProject({ title, tec, img }) {
  return (
    <div
      className=' w-[400px] backdrop-blur-lg backdrop-saturate-[180%] bg-[rgba(17,25,40,0.25)] border flex flex-col items-center justify-center text-center p-[38px] rounded-xl border-solid border-[rgba(255,255,255,0.125)]
    -webkit-backdrop-filter: blur(16px) saturate(180%)
    filter: drop-shadow(0 30px 10px rgba(0, 0, 0, 0.125))'
    >
      <div className='w-full '>
        <div
          className='bg-printGhibli bg-center bg-cover h-[300px] w-full border rounded-xl border-solid border-[rgba(255,255,255,0.255)]

'
        ></div>
        <h2
          className='my-6 text-[rgba(255,255,255,0.98)] uppercase text-[2
            rem]
  font-family: "Righteous", sans-serif'
        >
          {' '}
          {title}
        </h2>
        <p
          className='text-white text-center text-[0.8rem] leading-[150%] tracking-[2px] uppercase
  font-family: "Lato", sans-serif'
        >
          Tecnologias: {tec}
        </p>
      </div>
      <div className='mt-[18px]'>
        <button
          className='text-xs text-[0.8rem] tracking-[2px] cursor-pointer px-6 py-3 rounded-3xl text-[rgba(0,212,255,0.9)] border transition-all duration-[0.3s] ease-[ease] border-solid border-[rgba(0,212,255,0.6)]
          background: transparent hover:text-[rgba(255,255,255,0.9)] hover:transition-all hover:duration-[0.3s] hover:ease-[ease] hover:border-[rgba(255,255,255,0.9)] hover:scale-[1.125]'
        >
          SOBRE
        </button>
        <button
          className=' text-xs bg-blue-button text-[0.8rem] tracking-[2px] cursor-pointer px-6 py-3 rounded-3xl border-[none] ml-[10px] text-[rgba(255,255,255,0.95)] font-[bold] transition-all duration-[0.3s] ease-[ease] 
  filter: drop-shadow(0) hover:transition-all hover:duration-[0.3s] hover:ease-[ease] hover:border-[rgba(255,255,255,0.9)] hover:scale-[1.125]
  filter: drop-shadow(0 10px 5px rgba(0, 0, 0, 0.125))'
        >
          GITHUB
        </button>
      </div>
    </div>
  );
}

export default CardProject;
