import { createContext } from 'react';

const ThemeContext = createContext({
    backgroundColor: 'blue',
    textColor: '#000000' 
});

export default ThemeContext;
