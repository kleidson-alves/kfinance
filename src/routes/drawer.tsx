import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import Home from '../pages/Home';

const Drawer = createDrawerNavigator();

const DrawerNav: React.FC = () => {
    return (
        <Drawer.Navigator screenOptions={{ headerShown: false }}>
            <Drawer.Screen name="Home" component={Home} />
        </Drawer.Navigator>
    );
};

export default DrawerNav;
