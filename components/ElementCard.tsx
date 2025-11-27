import React from 'react';
import { IElement } from '../types';
import { getCategoryColor } from '../constants';

interface ElementCardProps {
  element: IElement;
  isSelected: boolean;
  isDimmed: boolean;
  onClick: (element: IElement) => void;
  darkMode: boolean;
  onHover: (element: IElement | null) => void;
}

export const ElementCard: React.FC<ElementCardProps> = ({ element, isSelected, isDimmed, onClick, darkMode, onHover }) => {
  const colorClass = getCategoryColor(element.category, darkMode);
  
  // Dynamic Grid positioning
  const style = {
    gridColumn: element.xpos,
    gridRow: element.ypos,
  };

  return (
    <button
      style={style}
      onClick={() => onClick(element)}
      onMouseEnter={() => onHover(element)}
      onMouseLeave={() => onHover(null)}
      className={`
        relative flex flex-col justify-between select-none
        border transition-all duration-200 ease-out
        ${colorClass}
        ${isSelected ? 'scale-110 z-20 shadow-[0_0_15px_rgba(255,255,255,0.5)] ring-2 ring-offset-2 ring-blue-500 animate-pulse-fast' : 'hover:scale-110 hover:z-10 hover:shadow-lg'}
        ${isDimmed ? 'opacity-20 grayscale filter' : 'opacity-100'}
        rounded-[2px] sm:rounded-sm md:rounded-md
        w-full h-full overflow-hidden p-[1px] sm:p-0.5
      `}
    >
      <div className="flex justify-between w-full opacity-80 font-mono leading-none px-[2%] pt-[2%]">
        <span style={{ fontSize: '1.2vmin' }}>{element.atomicNumber}</span>
      </div>
      
      <div className="flex-1 flex items-center justify-center -my-[5%]">
        <span className="font-bold font-serif" style={{ fontSize: '3vmin' }}>{element.symbol}</span>
      </div>

      <div className="w-full text-center pb-[2%]">
         <p className="truncate w-full opacity-90 leading-tight hidden sm:block" style={{ fontSize: '0.9vmin' }}>
            {element.name}
         </p>
         <p className="opacity-70 hidden lg:block leading-none" style={{ fontSize: '0.7vmin' }}>
             {element.atomicMass}
         </p>
      </div>
    </button>
  );
};