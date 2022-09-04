import React, { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, Dimensions } from 'react-native';
import Modal from 'react-native-modal';

import { IRegister, useRegister } from '../../../hooks/useRegister';
import { formatDate, formatValue } from '../../../utils/formaters';
import { useTheme } from 'styled-components';

import Icon from 'react-native-vector-icons/FontAwesome';

import {
    BaseText,
    Container,
    RegisterContent,
    Description,
    InfoView,
    Tag,
    TagText,
    DeleteButton,
} from './styles';

interface RegisterModalProps {
    isVisible: boolean;
    setIsVisible: (prop: boolean) => void;
    registerId: string;
}

const RegisterModal: React.FC<RegisterModalProps> = ({
    isVisible,
    setIsVisible,
    registerId,
}) => {
    const theme = useTheme();
    const [register, setRegister] = useState<IRegister>();

    const { getRegisterById, deleteRegister } = useRegister();

    const handleDeleteRegister = useCallback(async () => {
        await deleteRegister(registerId);

        setIsVisible(false);
    }, [deleteRegister, registerId, setIsVisible]);

    useEffect(() => {
        getRegisterById(registerId).then(r => setRegister(r));
    }, [getRegisterById, registerId]);

    return (
        <Modal
            isVisible={isVisible}
            backdropColor="#000"
            onBackdropPress={() => setIsVisible(false)}
            deviceHeight={Dimensions.get('window').height}>
            <Container>
                {register ? (
                    <>
                        <DeleteButton onPress={handleDeleteRegister}>
                            <Icon
                                name="trash"
                                color={theme.colors.negative}
                                size={25}
                            />
                        </DeleteButton>
                        <InfoView>
                            <BaseText size={theme.sizes.bodySmall}>
                                {formatDate(register.date)}
                            </BaseText>
                            <BaseText
                                size={theme.sizes.bodySmall}
                                color={
                                    register.category.isPositive
                                        ? theme.colors.positive
                                        : theme.colors.negative
                                }>
                                {formatValue(register.value)}
                            </BaseText>
                        </InfoView>
                        <RegisterContent>
                            <BaseText size={theme.sizes.subtitle}>
                                {register.name}
                            </BaseText>
                            {register.description && (
                                <Description>
                                    {register.description}
                                </Description>
                            )}
                        </RegisterContent>
                        <Tag color={register.category.color}>
                            <TagText>{register.category.name}</TagText>
                        </Tag>
                    </>
                ) : (
                    <ActivityIndicator
                        size="large"
                        color={theme.colors.primary}
                    />
                )}
            </Container>
        </Modal>
    );
};

export default RegisterModal;
