import { DrawerItem } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';

import FAIcon from 'react-native-vector-icons/FontAwesome';
import FIcon from 'react-native-vector-icons/Feather';

import { useTheme } from 'styled-components';

interface CustomDrawerIntemProps {
    icon: string;
    name: string;
    iconType?: string;
    setPage: (page: string) => void;
    currentPage: string;
}

const CustomDrawerItem: React.FC<CustomDrawerIntemProps> = ({
    icon,
    iconType,
    name,
    setPage,
    currentPage,
}: CustomDrawerIntemProps) => {
    const theme = useTheme();
    const navigation = useNavigation();

    const getIcon = useCallback(() => {
        if (!iconType || iconType === 'FA') {
            return (
                <FAIcon
                    name={icon}
                    size={25}
                    color={
                        currentPage === name
                            ? theme.colors.primary
                            : theme.colors.darkStroke
                    }
                />
            );
        } else {
            return (
                <FIcon
                    name={icon}
                    size={25}
                    color={
                        currentPage === name
                            ? theme.colors.primary
                            : theme.colors.darkStroke
                    }
                />
            );
        }
    }, [
        currentPage,
        icon,
        name,
        theme.colors.darkStroke,
        theme.colors.primary,
        iconType,
    ]);

    const handleSelectItem = useCallback(() => {
        setPage(name);
        navigation.navigate(name as never);
    }, [name, navigation, setPage]);

    return (
        <DrawerItem
            label={name}
            labelStyle={{
                fontFamily: theme.fonts.regular,
                fontSize: theme.sizes.body,
                color:
                    currentPage === name
                        ? theme.colors.primary
                        : theme.colors.darkStroke,
            }}
            onPress={handleSelectItem}
            icon={() => getIcon()}
        />
    );
};

export default CustomDrawerItem;
