import React, { useCallback, useState } from 'react';
import { startOfDay } from 'date-fns';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { formatDate } from '../../../utils/formaters';
import { Container, DateButton, TextSpan } from './styles';

interface CalendarInputData {
    setDate: (date: any) => void;
}

const CalendarInput: React.FC<CalendarInputData> = ({ setDate }) => {
    const [isVisible, setIsvisible] = useState(false);
    const [value, setValue] = useState<Date>();

    const handleConfirm = useCallback(
        date => {
            setValue(startOfDay(date));
            setDate(startOfDay(date));

            setIsvisible(false);
        },
        [setDate],
    );

    return (
        <Container isFilled={!!value}>
            <DateButton onPress={() => setIsvisible(true)}>
                <TextSpan isFilled={!!value}>
                    {value ? formatDate(value) : 'Data'}
                </TextSpan>
            </DateButton>
            <DateTimePickerModal
                isVisible={isVisible}
                onCancel={() => setIsvisible(false)}
                onConfirm={handleConfirm}
                mode="date"
                date={value ? value : new Date()}
                maximumDate={new Date()}
                timeZoneOffsetInMinutes={-3 * 60} // - 180
            />
        </Container>
    );
};

export default CalendarInput;
