import React, { useEffect, useState } from 'react';
import { Keyboard } from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import { useTheme } from 'styled-components';

import {
    Container,
    Divider,
    ItemContainer,
    ItemContent,
    ItemText,
} from './styles';

interface ItemProps {
    id: string;
    name: string;
}

interface DropDownProps {
    name: string;
    isFocused: boolean;
    value: any;
    items: ItemProps[];
    setValue: (value: any) => void;
}

const DropDown: React.FC<DropDownProps> = ({
    name,
    items,
    value,
    setValue,
    isFocused,
}) => {
    const [open, setOpen] = useState(false);
    const theme = useTheme();

    useEffect(() => {
        setOpen(false);
    }, [isFocused]);

    const itemsValue = items.map(item => {
        return { label: item.name, value: item.name };
    });

    return (
        <Container
            placeholder={name}
            items={itemsValue}
            open={open}
            value={value}
            isFilled={!!value}
            setValue={setValue}
            onOpen={() => Keyboard.dismiss()}
            dropDownContainerStyle={{ borderColor: theme.colors.stroke }}
            renderListItem={({ item }) => {
                return (
                    <ItemContainer
                        onPress={() => {
                            setValue(item.value);

                            setOpen(false);
                        }}>
                        <ItemContent>
                            <ItemText>{item.value}</ItemText>
                        </ItemContent>
                        <Divider />
                    </ItemContainer>
                );
            }}
            ArrowUpIconComponent={() => (
                <Icon
                    name="chevron-up"
                    color={theme.colors.primary}
                    size={20}
                />
            )}
            ArrowDownIconComponent={() => (
                <Icon
                    name="chevron-down"
                    color={theme.colors.primary}
                    size={20}
                />
            )}
            setOpen={setOpen}
            textStyle={{
                fontFamily: theme.fonts.regular,
                color: theme.colors.primary,
                fontSize: theme.sizes.input,
            }}
            placeholderStyle={{
                color: theme.colors.textBlack,
                opacity: 0.4,
                fontSize: theme.sizes.input,
            }}
            dropDownDirection={'BOTTOM'}
            maxHeight={200}
            activityIndicatorColor={theme.colors.positive}
            listMode="SCROLLVIEW"
        />
    );
};

export default DropDown;
