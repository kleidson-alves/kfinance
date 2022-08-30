import React from 'react';
import { CategoryProvider } from './useCategory';
import { RegisterProvider } from './useRegister';

const AppProvider: React.FC = ({ children }) => {
    return (
        <CategoryProvider>
            <RegisterProvider>{children}</RegisterProvider>
        </CategoryProvider>
    );
};

export default AppProvider;
