import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Splash from '../pages/Splash';
import DrawerNav from './drawer';

const Stack = createStackNavigator();

const Routes: React.FC = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="Drawer" component={DrawerNav} />
        </Stack.Navigator>
    );
};

export default Routes;
