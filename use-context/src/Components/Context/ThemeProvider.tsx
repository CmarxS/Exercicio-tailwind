import ThemeContext from './ThemeContext';


const ThemeProvider = ({ children }: { children: string }) => {
    const theme = {
        backgroundColor: '#f0f0f0',
        textColor: '#333333'
    };

    return (
        <ThemeContext.Provider value={theme}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
