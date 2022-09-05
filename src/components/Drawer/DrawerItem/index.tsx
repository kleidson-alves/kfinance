import { DrawerItem } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useTheme } from 'styled-components';

interface CustomDrawerIntemProps {
    icon: string;
    name: string;
    navigateTo: string;
    setPage: (page: string) => void;
    currentPage: string;
}

const CustomDrawerItem: React.FC<CustomDrawerIntemProps> = ({
    icon,
    name,
    navigateTo,
    setPage,
    currentPage,
}: CustomDrawerIntemProps) => {
    const theme = useTheme();
    const navigation = useNavigation();

    const handleSelectItem = useCallback(() => {
        setPage(name);
        navigation.navigate(navigateTo as never);
    }, [name, navigateTo, navigation, setPage]);
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
            icon={() => (
                <Icon
                    name={icon}
                    size={25}
                    color={
                        currentPage === name
                            ? theme.colors.primary
                            : theme.colors.darkStroke
                    }
                />
            )}
        />
    );
};

export default CustomDrawerItem;
