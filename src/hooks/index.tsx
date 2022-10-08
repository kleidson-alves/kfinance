import React from 'react';
import { CategoryProvider } from './useCategory';
import { PlanningProvider } from './usePlanning';
import { RegisterProvider } from './useRegister';

const AppProvider: React.FC = ({ children }) => {
    return (
        <CategoryProvider>
            <RegisterProvider>
                <PlanningProvider>{children}</PlanningProvider>
            </RegisterProvider>
        </CategoryProvider>
    );
};

export default AppProvider;
