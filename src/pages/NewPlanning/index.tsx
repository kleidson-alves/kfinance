import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import * as Yup from 'yup';

import { usePlanning } from '../../hooks/usePlanning';

import { Button, RadioButton } from '../../components/Buttons';
import { Input } from '../../components/Inputs';
import { SimpleHeader } from '../../components/Headers';

import { formatNumber } from '../../utils/formaters';
import { INFO_GAIN_TYPE, INFO_SPENT_TYPE } from '../../utils/constants';

import { Container, Form, Gap, InfoArea, InfoText } from './styles';

const NewPlanning: React.FC = () => {
    const navigation = useNavigation();
    const { createPlanning } = usePlanning();

    const [name, setName] = useState('');
    const [value, setValue] = useState('');
    const [type, setType] = useState('Ganho');
    const [infoText, setInfoText] = useState<string>();

    const hanldeSubmitForm = useCallback(async () => {
        const schema = Yup.object().shape({
            name: Yup.string().required(),
            value: Yup.number().required().positive(),
        });

        const newRegister = {
            name,
            value: formatNumber(value),
            type,
        };

        const validation = await schema
            .validate(newRegister, { abortEarly: true })
            .catch(err => {
                console.log(err);
            });

        if (validation) {
            await createPlanning(newRegister);
        }

        navigation.goBack();
    }, [createPlanning, name, navigation, type, value]);

    useEffect(() => {
        if (type === 'Ganho') {
            setInfoText(INFO_GAIN_TYPE);
        } else {
            setInfoText(INFO_SPENT_TYPE);
        }
    }, [type]);

    return (
        <Container>
            <SimpleHeader title="Novo Planejamento" />
            <ScrollView>
                <Form>
                    <RadioButton
                        firstOption="Ganho"
                        secondOption="Gasto"
                        changeOption={setType}
                        currentOption={type}
                    />
                    <InfoArea>
                        <InfoText>{infoText}</InfoText>
                    </InfoArea>
                    <Input
                        placeholder="Nome do registro"
                        onChangeText={setName}
                    />
                    <Input
                        placeholder="Valor"
                        onChangeText={setValue}
                        keyboardType="numeric"
                    />
                    <Gap />
                    <Button textLabel="Adicionar" onClick={hanldeSubmitForm} />
                </Form>
            </ScrollView>
        </Container>
    );
};

export default NewPlanning;
