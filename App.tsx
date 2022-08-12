import React from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import theme from './src/theme';
import Routes from './src/routes';

const App = () => {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <ThemeProvider theme={theme}>
                <NavigationContainer>
                    <StatusBar hidden />
                    <Routes />
                </NavigationContainer>
            </ThemeProvider>
        </GestureHandlerRootView>
    );
};

export default App;
