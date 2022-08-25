import React, { useCallback, useState } from 'react';
import { Container } from './styles';

interface InputProps {
    placeholder: string;
    maxLength?: number;
    isTextAreaMode?: boolean;
    onChangeText: (value: any) => void;
}

const Input: React.FC<InputProps> = ({
    placeholder,
    maxLength = 50,
    isTextAreaMode = false,
    onChangeText,
}) => {
    const [isFilled, setIsFilled] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    const handleChangeText = useCallback(
        (value: any) => {
            if (value === '') {
                setIsFilled(false);
            } else {
                setIsFilled(true);
            }

            onChangeText(value);
        },
        [onChangeText],
    );

    return isTextAreaMode ? (
        <Container
            placeholder={placeholder}
            multiline={true}
            numberOfLines={8}
            onFocus={_ => setIsFocused(true)}
            onBlur={_ => setIsFocused(false)}
            style={{ textAlignVertical: 'top' }}
            maxLength={maxLength}
            onChangeText={value => handleChangeText(value)}
            isFilled={isFilled || isFocused}
        />
    ) : (
        <Container
            placeholder={placeholder}
            maxLength={maxLength}
            onFocus={_ => setIsFocused(true)}
            onBlur={_ => setIsFocused(false)}
            onChangeText={value => handleChangeText(value)}
            isFilled={isFilled || isFocused}
        />
    );
};

export default Input;
