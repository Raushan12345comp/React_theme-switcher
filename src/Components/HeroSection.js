import React, { useContext } from 'react';
import AppTheme from '../Colors';
import ThemeContext from '../Context/ThemeContext.';
import Header from './Header';

const HeroSection = () => {
  const theme = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[theme];


  const [themeMode, setThemeMode] = useContext(ThemeContext)
  return (


    
    <div
      style={{
        padding: '1rem',
        backgroundColor: `${currentTheme.backgroundColor}`,
        color: `${currentTheme.textColor}`,
        textAlign: 'center',
      }}
    >
        <Header />
      
      <p>This is a nice pargraph</p>
      <h1>Context API theme toggler</h1>
      <button
        onClick={() => {
          setThemeMode(themeMode === 'light' ? 'dark' : 'light');
        }}
        style={{
          backgroundColor: `${currentTheme.backgroundColor}`,
          padding: '10px 150px',
          fontSize: '20px',
          color: `${currentTheme.textColor}`,
          border: `${currentTheme.border}`,
        }}
      >
        <span>{themeMode === "light" ? "Turn off": "Lights On "}</span>
      </button>
    </div>
  );
};

export default HeroSection;
