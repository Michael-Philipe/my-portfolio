import React from 'react';

export default function ItemList({ item }) {
  return (
    <li className="ml-8 capitalize relative cursor-pointer before:content-[''] before:absolute before:w-full before:h-[0.1rem] before:rounded-[4px] before:bg-[#ffffff] before:bottom-0 before:left-0 before:origin-right before:scale-x-0 before:transition-transform before:delay-[0.1s] before:ease-in-out hover:before:origin-left hover:before:scale-x-100">
      {item}
    </li>
  );
}
