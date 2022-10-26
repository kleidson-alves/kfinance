import React, { useCallback, useState } from 'react';
import * as Yup from 'yup';

import { useNavigation } from '@react-navigation/native';
import { useCategory } from '../../hooks/useCategory';
import { useRegister } from '../../hooks/useRegister';

import { ScrollView } from 'react-native-gesture-handler';

import { Button } from '../../components/Buttons';
import { CalendarInput } from '../../components/Inputs';
import DropDown from '../../components/DropDown';
import { Input } from '../../components/Inputs';
import { SimpleHeader } from '../../components/Headers';

import { Container, Form } from './styles';
import { formatNumber } from '../../utils/formaters';

const NewRegister: React.FC = () => {
    const navigation = useNavigation();

    const [name, setName] = useState('');
    const [value, setValue] = useState('');
    const [date, setDate] = useState<Date>();
    const [description, setDescription] = useState();
    const [category, setCategory] = useState('');

    const [isDropDownFocused, setIsDropDownFocused] = useState(false);

    const { categories } = useCategory();
    const { createRegister } = useRegister();

    const handleSubmit = useCallback(async () => {
        const schema = Yup.object().shape({
            name: Yup.string().required(),
            value: Yup.number().required().positive(),
            date: Yup.date().required(),
            description: Yup.string().max(400),
            category: Yup.string().required(),
        });

        const newRegister = {
            name,
            value: formatNumber(value),
            date: date!,
            description,
            category,
        };

        const validation = await schema
            .validate(newRegister, { abortEarly: true })
            .catch(err => {
                console.log(err);
            });

        if (validation) {
            await createRegister(newRegister);
        }

        navigation.goBack();
    }, [name, value, date, description, category, navigation, createRegister]);

    const handleFocusAnotherInput = useCallback(() => {
        setIsDropDownFocused(v => !v);
    }, []);

    return (
        <Container>
            <SimpleHeader title="Novo Registro" />
            <ScrollView nestedScrollEnabled={true}>
                <Form>
                    <Input
                        placeholder="Nome"
                        onChangeText={setName}
                        onFocus={handleFocusAnotherInput}
                        maxLength={30}
                    />
                    <Input
                        placeholder="Valor"
                        onChangeText={setValue}
                        onFocus={handleFocusAnotherInput}
                        keyboardType="numeric"
                    />
                    <DropDown
                        key={1}
                        name="Categoria"
                        items={categories}
                        value={category}
                        setValue={setCategory}
                        isFocused={isDropDownFocused}
                    />

                    <CalendarInput setDate={setDate} />

                    <Input
                        placeholder="Descrição"
                        isTextAreaMode={true}
                        onChangeText={setDescription}
                        onFocus={handleFocusAnotherInput}
                        maxLength={300}
                    />

                    <Button textLabel="Registrar" onClick={handleSubmit} />
                </Form>
            </ScrollView>
        </Container>
    );
};

export default NewRegister;
