import React, { useCallback, useState } from 'react';
import { TextInputProps } from 'react-native';
import { Container } from './styles';

interface InputProps extends Omit<TextInputProps, 'accessibilityRole'> {
    maxLength?: number;
    isTextAreaMode?: boolean;
    onChangeText: (value: any) => void;
    onFocus?: () => void;
}

const Input: React.FC<InputProps> = ({
    maxLength = 50,
    isTextAreaMode = false,
    onChangeText,
    onFocus,
    ...props
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

    const handleFocus = useCallback(() => {
        if (onFocus) {
            onFocus();
        }

        setIsFocused(true);
    }, [onFocus]);

    return isTextAreaMode ? (
        <Container
            multiline={true}
            numberOfLines={8}
            onFocus={handleFocus}
            onBlur={_ => setIsFocused(false)}
            style={{ textAlignVertical: 'top' }}
            maxLength={maxLength}
            onChangeText={value => handleChangeText(value)}
            isFilled={isFilled || isFocused}
            {...props}
        />
    ) : (
        <Container
            maxLength={maxLength}
            onFocus={handleFocus}
            onBlur={_ => setIsFocused(false)}
            onChangeText={value => handleChangeText(value)}
            isFilled={isFilled || isFocused}
            {...props}
        />
    );
};

export default Input;
