import React from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components/native';

import Splash from './src/pages/Splash';
import theme from './src/theme';

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <StatusBar hidden />
            <Splash />
        </ThemeProvider>
    );
};

export default App;
