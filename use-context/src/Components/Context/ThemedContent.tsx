import React, { useContext } from 'react';
import ThemeContext from '../Context/ThemeContext';

const ThemedComponent = () => {
    const theme = useContext(ThemeContext);

    const style: React.CSSProperties = {
        backgroundColor: theme.backgroundColor,
        color: theme.textColor,
        padding: '20px',
        borderRadius: '5px',
        textAlign: 'center',
    };

    return (
        <div style={style}>
            <h1>Este é um componente temático!</h1>
            <p>As cores são controladas pelo ThemeContext.</p>
        </div>
    );
};

export default ThemedComponent;
