import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export const getFontSizeByValue = (value: number) => {
    return `${RFValue(value)}px`;
};

export const getFontSizeByPercentage = (value: number) => {
    return `${RFPercentage(value)}%`;
};
