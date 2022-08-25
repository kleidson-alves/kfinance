import React, { useEffect, useState } from 'react';
import { Keyboard } from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import { useTheme } from 'styled-components';

import { Container, Divider, ItemContainer, ItemText } from './styles';

interface DropDownProps {
    name: string;
    isFocused: boolean;
    value: any;
    setValue: (value: any) => void;
}

const DropDown: React.FC<DropDownProps> = ({
    value,
    setValue,
    name,
    isFocused,
}) => {
    const [open, setOpen] = useState(false);
    const theme = useTheme();

    const items = [
        {
            label: 'teste',
            value: 'teste',
        },
        {
            label: 'teste2',
            value: 'teste2',
        },
        {
            label: 'teste3',
            value: 'teste3',
        },
        {
            label: 'teste4',
            value: 'teste4',
        },
        {
            label: 'teste5',
            value: 'teste5',
        },
    ];

    useEffect(() => {
        setOpen(false);
    }, [isFocused]);

    return (
        <Container
            placeholder={name}
            items={items}
            open={open}
            value={value}
            isFilled={!!value}
            setValue={setValue}
            onOpen={() => Keyboard.dismiss()}
            dropDownContainerStyle={{ borderColor: theme.colors.stroke }}
            renderListItem={({ item }) => {
                return (
                    <>
                        <ItemContainer
                            onPress={() => {
                                setValue(item.value);
                                setOpen(false);
                            }}>
                            <ItemText>{item.value}</ItemText>
                        </ItemContainer>
                        <Divider />
                    </>
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
