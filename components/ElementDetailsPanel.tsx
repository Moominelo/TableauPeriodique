import React from 'react';
import { IElement } from '../types';
import LatexRenderer from './LatexRenderer';
import { X, Atom, Thermometer, Layers, Beaker, Cuboid } from 'lucide-react';
import { getCategoryColor } from '../constants';

interface ElementDetailsPanelProps {
  element: IElement | null;
  onClose: () => void;
  darkMode: boolean;
}

export const ElementDetailsPanel: React.FC<ElementDetailsPanelProps> = ({ element, onClose, darkMode }) => {
  if (!element) return null;

  const headerColor = getCategoryColor(element.category, darkMode);

  return (
    <div className={`fixed inset-y-0 right-0 w-full md:w-[480px] z-50 shadow-2xl transform transition-transform duration-300 ease-in-out ${element ? 'translate-x-0' : 'translate-x-full'} bg-white dark:bg-gray-900 overflow-y-auto`}>
      {/* Header with Image Background */}
      <div className="relative h-48 md:h-64 overflow-hidden">
        <img 
            src={element.image} 
            alt={element.name} 
            className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-90" />
        
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-black/40 hover:bg-black/60 text-white rounded-full backdrop-blur-sm transition"
        >
          <X size={24} />
        </button>

        <div className="absolute bottom-4 left-6 text-white">
          <div className="flex items-end gap-4">
             <div className={`w-16 h-16 flex items-center justify-center text-3xl font-bold border-2 rounded-lg backdrop-blur-md bg-white/20 ${headerColor}`}>
                 {element.symbol}
             </div>
             <div>
                <h2 className="text-4xl font-bold">{element.name}</h2>
                <p className="text-lg opacity-90">{element.category}</p>
             </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-6 text-gray-800 dark:text-gray-200">
        
        {/* Key Stats Grid */}
        <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-xl flex items-center gap-3">
                <Atom className="text-blue-500" />
                <div>
                    <p className="text-xs uppercase text-gray-500 dark:text-gray-400">Numéro Atomique</p>
                    <p className="font-mono text-xl font-bold">{element.atomicNumber}</p>
                </div>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-xl flex items-center gap-3">
                <Cuboid className="text-purple-500" />
                <div>
                    <p className="text-xs uppercase text-gray-500 dark:text-gray-400">Masse Atomique</p>
                    <p className="font-mono text-xl font-bold">{element.atomicMass} u</p>
                </div>
            </div>
        </div>

        {/* LaTeX Configuration */}
        <div className="space-y-2">
            <div className="flex items-center gap-2 mb-2">
                <Layers className="w-5 h-5 text-indigo-500" />
                <h3 className="font-semibold text-lg">Configuration Électronique</h3>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg border border-gray-200 dark:border-gray-700 overflow-x-auto flex items-center justify-center min-h-[60px]">
                <LatexRenderer latex={element.electronConfiguration} displayMode={true} className="text-lg" />
            </div>
        </div>

        {/* Physical Properties */}
        <div className="space-y-3">
             <div className="flex items-center gap-2 mb-1">
                <Thermometer className="w-5 h-5 text-red-500" />
                <h3 className="font-semibold text-lg">Propriétés Physiques</h3>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex justify-between border-b dark:border-gray-700 pb-1">
                    <span className="opacity-70">Point de fusion</span>
                    <span className="font-mono">{element.meltingPoint ? `${element.meltingPoint} K` : 'Inconnu'}</span>
                </div>
                <div className="flex justify-between border-b dark:border-gray-700 pb-1">
                    <span className="opacity-70">Point d'ébullition</span>
                    <span className="font-mono">{element.boilingPoint ? `${element.boilingPoint} K` : 'Inconnu'}</span>
                </div>
                <div className="flex justify-between border-b dark:border-gray-700 pb-1">
                    <span className="opacity-70">Groupe</span>
                    <span className="font-mono">{element.group}</span>
                </div>
                <div className="flex justify-between border-b dark:border-gray-700 pb-1">
                    <span className="opacity-70">Période</span>
                    <span className="font-mono">{element.period}</span>
                </div>
            </div>
        </div>

        {/* Description */}
        <div>
            <h3 className="font-semibold text-lg mb-2">À propos</h3>
            <p className="leading-relaxed opacity-80 text-sm md:text-base">
                {element.summary}
            </p>
        </div>

        {/* Chemical Formula / LaTeX Demo */}
        <div className="space-y-2">
            <div className="flex items-center gap-2 mb-2">
                <Beaker className="w-5 h-5 text-green-500" />
                <h3 className="font-semibold text-lg">Représentation Chimique</h3>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg border border-gray-200 dark:border-gray-700 overflow-x-auto flex justify-center min-h-[60px] items-center">
                {element.formulaRepresentationLatex ? (
                    <LatexRenderer latex={element.formulaRepresentationLatex} displayMode={true} className="text-lg" />
                ) : (
                    <span className="text-gray-400 italic">Aucune formule disponible</span>
                )}
            </div>
        </div>

      </div>
    </div>
  );
};