import React from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  value: string;
  onChange: (val: string) => void;
  darkMode: boolean;
  toggleTheme: () => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ value, onChange, darkMode, toggleTheme }) => {
  return (
    <div className="flex items-center gap-4 w-full max-w-2xl bg-white dark:bg-gray-800 p-2 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
      <div className="flex-1 flex items-center gap-3 px-2">
        <Search className="text-gray-400" size={20} />
        <input 
          type="text" 
          placeholder="Rechercher par Symbole (Au), Nom (Or), ou Numéro (79)..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="bg-transparent w-full outline-none text-gray-800 dark:text-gray-100 placeholder-gray-400"
        />
      </div>
    </div>
  );
};