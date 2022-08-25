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
                locale="pt-BR"
                accentColor={theme.colors.primary}
                textColor={theme.colors.positive}
            />
        </Container>
    );
};

export default Calendar;
