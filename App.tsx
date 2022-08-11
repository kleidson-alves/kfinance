import React from 'react';
import {ThemeProvider} from 'styled-components/native';

import Home from './src/pages/Home';
import theme from './src/theme';

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <Home />
        </ThemeProvider>
    );
};

export default App;
