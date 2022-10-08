import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import NewPlanning from '../pages/NewPlanning';
import NewRegister from '../pages/NewRegister';
import Splash from '../pages/Splash';
import DrawerNav from './drawer';

const Stack = createStackNavigator();

const Routes: React.FC = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="Drawer" component={DrawerNav} />
            <Stack.Screen name="NewRegister" component={NewRegister} />
            <Stack.Screen name="NewPlanning" component={NewPlanning} />
        </Stack.Navigator>
    );
};

export default Routes;
