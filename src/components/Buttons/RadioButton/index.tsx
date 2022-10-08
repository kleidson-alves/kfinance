import React from 'react';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { Container, Label, LabelText } from './styles';

interface RadioButtonProps {
    firstOption: string;
    secondOption: string;
    changeOption: (option: string) => void;
    currentOption: string;
}

const RadioButton: React.FC<RadioButtonProps> = ({
    changeOption,
    currentOption,
    firstOption,
    secondOption,
}) => {
    return (
        <Container>
            <TouchableWithoutFeedback onPress={() => changeOption(firstOption)}>
                <Label isActive={firstOption === currentOption}>
                    <LabelText isActive={firstOption === currentOption}>
                        {firstOption}
                    </LabelText>
                </Label>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
                onPress={() => changeOption(secondOption)}>
                <Label isActive={secondOption === currentOption}>
                    <LabelText isActive={secondOption === currentOption}>
                        {secondOption}
                    </LabelText>
                </Label>
            </TouchableWithoutFeedback>
        </Container>
    );
};

export default RadioButton;
