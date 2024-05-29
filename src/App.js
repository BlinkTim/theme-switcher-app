import React from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

const App = () => {
    const { theme } = useTheme();

    return (
        <div className={theme}>
            <div className="min-h-screen flex flex-col">
                <Header />
                <Main />
                <Footer />
            </div>
        </div>
    );
};

const AppWithTheme = () => (
    <ThemeProvider>
        <App />
    </ThemeProvider>
);

export default AppWithTheme;
