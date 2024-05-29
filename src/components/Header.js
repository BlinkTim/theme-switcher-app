import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon } from 'lucide-react';

const Header = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <header className="bg-gray-800 p-4 flex justify-between items-center">
            <h1 className="text-white">My App</h1>
            <button
                onClick={toggleTheme}
                className="p-2 rounded-full bg-gray-700 text-white"
            >
                {theme === 'light' ? <Sun /> : <Moon />}
            </button>
        </header>
    );
};

export default Header;
