import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Dimensions } from 'react-native';
import Modal from 'react-native-modal';
import { useTheme } from 'styled-components';
import { IRegister, useRegister } from '../../hooks/useRegister';
import { formatDate, formatValue } from '../../utils/formaters';
import {
    BaseText,
    Container,
    Content,
    Description,
    InfoView,
    Tag,
    TagText,
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

    const { getRegisterById } = useRegister();

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
                        <Content>
                            <BaseText size={theme.sizes.subtitle}>
                                {register.name}
                            </BaseText>
                            {register.description && (
                                <Description>
                                    {register.description}
                                </Description>
                            )}
                        </Content>
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
