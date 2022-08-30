import React from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import theme from './src/theme';
import Routes from './src/routes';
import AppProvider from './src/hooks';

const App = () => {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <ThemeProvider theme={theme}>
                <AppProvider>
                    <NavigationContainer>
                        <StatusBar hidden />
                        <Routes />
                    </NavigationContainer>
                </AppProvider>
            </ThemeProvider>
        </GestureHandlerRootView>
    );
};

export default App;
