import React, { useCallback, useState } from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { useTheme } from 'styled-components';
import { Container, DateButton, TextSpan } from './styles';

const Calendar: React.FC = () => {
    const theme = useTheme();
    const [isVisible, setIsvisible] = useState(false);
    const [value, setValue] = useState();

    const handleConfirm = useCallback(date => {
        setValue(date);

        setIsvisible(false);
    }, []);

    return (
        <Container isFilled={!!value}>
            <DateButton onPress={() => setIsvisible(true)}>
                <TextSpan isFilled={!!value}>
                    {value
                        ? Intl.DateTimeFormat('pt-BR', {
                              timeZone: 'UTC',
                          }).format(value)
                        : 'Data'}
                </TextSpan>
            </DateButton>
            <DateTimePickerModal
                isVisible={isVisible}
                onCancel={() => setIsvisible(false)}
                onConfirm={handleConfirm}
                mode="date"
                date={value ? value : new Date()}
                style={{
                    backgroundColor: theme.colors.primary,
                }}
                pickerContainerStyleIOS={{
                    backgroundColor: theme.colors.primary,
                }}
                modalStyleIOS={{ backgroundColor: theme.colors.orange }}
                maximumDate={new Date()}
                accentColor={theme.colors.primary}
                locale={'pt-br'}
            />
        </Container>
    );
};

export default Calendar;
