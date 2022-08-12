import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import Home from '../pages/Home';
import Splash from '../pages/Splash';

const Drawer = createDrawerNavigator();

const Routes: React.FC = () => {
    return (
        <Drawer.Navigator screenOptions={{ headerShown: false }}>
            <Drawer.Screen name="Splash" component={Splash} />
            <Drawer.Screen name="Home" component={Home} />
        </Drawer.Navigator>
    );
};

export default Routes;
