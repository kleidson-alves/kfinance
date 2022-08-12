import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import CustomDrawer from '../components/Drawer';
import Home from '../pages/Home';
import Registers from '../pages/Registers';

const Drawer = createDrawerNavigator();

const DrawerNav: React.FC = () => {
    return (
        <Drawer.Navigator
            screenOptions={{ headerShown: false }}
            drawerContent={CustomDrawer}>
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Registers" component={Registers} />
        </Drawer.Navigator>
    );
};

export default DrawerNav;
