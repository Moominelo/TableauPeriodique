import React, { useState, useMemo, useEffect } from 'react';
import { ELEMENTS } from './constants';
import { IElement } from './types';
import { ElementCard } from './components/ElementCard';
import { ElementDetailsPanel } from './components/ElementDetailsPanel';
import { SearchBar } from './components/SearchBar';
import { Moon, Sun } from 'lucide-react';

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedElement, setSelectedElement] = useState<IElement | null>(null);
  const [hoveredElement, setHoveredElement] = useState<IElement | null>(null);
  const [darkMode, setDarkMode] = useState(true);

  // Apply dark mode class to html
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(!darkMode);

  // Filter Logic
  const filteredElements = useMemo(() => {
    if (!searchTerm) return ELEMENTS;
    const lower = searchTerm.toLowerCase();
    return ELEMENTS.filter(e => 
      e.name.toLowerCase().includes(lower) || 
      e.symbol.toLowerCase().includes(lower) || 
      e.atomicNumber.toString().includes(lower)
    );
  }, [searchTerm]);

  // If search is active, we need to know which IDs are valid to dim others
  const activeIds = useMemo(() => new Set(filteredElements.map(e => e.atomicNumber)), [filteredElements]);

  return (
    <div className="h-screen w-screen bg-gray-50 dark:bg-gray-950 flex flex-col items-center p-2 sm:p-4 transition-colors duration-300 overflow-hidden relative">
      
      {/* Top Bar - Compact */}
      <header className="w-full flex items-center justify-between mb-2 sm:mb-4 gap-4 z-40 shrink-0 h-16 sm:h-auto">
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex bg-gradient-to-br from-blue-500 to-purple-600 w-10 h-10 rounded-lg items-center justify-center text-white font-bold text-xl shadow-lg">
            M
          </div>
          <h1 className="text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 truncate">
            Tableau Périodique Interactif
          </h1>
        </div>

        <div className="flex-1 max-w-lg mx-4">
             <SearchBar 
                value={searchTerm} 
                onChange={setSearchTerm} 
                darkMode={darkMode}
                toggleTheme={toggleTheme}
             />
        </div>

        <button 
          onClick={toggleTheme}
          className="p-2 sm:p-3 rounded-xl bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition text-gray-700 dark:text-yellow-400 border border-gray-200 dark:border-gray-700 shrink-0"
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </header>

      {/* Main Grid Container - Flex-1 to fill remaining space, no overflow scroll on container if we want to fit */}
      <main className="flex-1 w-full h-full flex flex-col justify-center relative">
        
           {/* Tooltip Overlay */}
           {hoveredElement && !selectedElement && (
            <div className="fixed top-24 left-1/2 -translate-x-1/2 pointer-events-none z-50 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 flex flex-col items-center w-64 animate-in fade-in zoom-in duration-200">
               <span className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">{hoveredElement.symbol}</span>
               <span className="font-semibold text-lg">{hoveredElement.name}</span>
               <span className="text-sm opacity-60 uppercase tracking-wider">{hoveredElement.category}</span>
               <div className="mt-2 text-xs font-mono bg-gray-100 dark:bg-gray-900 px-2 py-1 rounded">
                 Z = {hoveredElement.atomicNumber}
               </div>
            </div>
           )}

           {/* The Periodic Table Grid - 18 cols, 10 rows (7 periods + gap + 2 f-block) */}
           <div 
             className="grid gap-[2px] sm:gap-1 w-full h-full"
             style={{ 
               gridTemplateColumns: 'repeat(18, minmax(0, 1fr))', 
               gridTemplateRows: 'repeat(10, minmax(0, 1fr))',
               maxHeight: '85vh' // Prevent vertical overflow, keep aspect roughly right
             }}
           >
              {ELEMENTS.map(element => (
                <ElementCard 
                  key={element.atomicNumber} 
                  element={element}
                  isSelected={selectedElement?.atomicNumber === element.atomicNumber}
                  isDimmed={searchTerm !== '' && !activeIds.has(element.atomicNumber)}
                  onClick={setSelectedElement}
                  onHover={setHoveredElement}
                  darkMode={darkMode}
                />
              ))}
           </div>
      </main>

      {/* Details Panel Overlay */}
      {selectedElement && (
         <>
            {/* Backdrop */}
            <div 
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50 transition-opacity"
              onClick={() => setSelectedElement(null)}
            />
            <ElementDetailsPanel 
              element={selectedElement} 
              onClose={() => setSelectedElement(null)} 
              darkMode={darkMode}
            />
         </>
      )}

    </div>
  );
};

export default App;