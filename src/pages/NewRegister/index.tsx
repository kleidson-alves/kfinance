import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';

import { Button } from '../../components/Buttons';
import CalendarInput from '../../components/CalendarInput';
import DropDown from '../../components/DropDown';
import Input from '../../components/Input';
import SimpleHeader from '../../components/SimpleHeader';

import { useCategory } from '../../hooks/useCategory';
import { useRegister } from '../../hooks/useRegister';

import { Container, Form } from './styles';

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
        await createRegister({
            name,
            value: Number(value),
            date: date!,
            description,
            category,
        });

        navigation.goBack();
    }, [createRegister, name, value, date, description, category, navigation]);

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
