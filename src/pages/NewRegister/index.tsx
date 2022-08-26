import React, { useCallback, useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';

import { Button } from '../../components/Buttons';
import CalendarInput from '../../components/CalendarInput';
import DropDown from '../../components/DropDown';
import Input from '../../components/Input';
import SimpleHeader from '../../components/SimpleHeader';

import { Container, Form } from './styles';

const NewRegister: React.FC = () => {
    const [name, setName] = useState();
    const [value, setValue] = useState();
    const [date, setDate] = useState();
    const [description, setDescription] = useState();
    const [category, setCategory] = useState();

    const [isDropDownFocused, setIsDropDownFocused] = useState(false);

    const handleSubmit = useCallback(() => {
        const data = {
            name,
            value,
            date,
            description,
        };

        console.log(data);
    }, [name, value, date, description]);

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
                        maxLength={50}
                    />
                    <Input
                        placeholder="Valor"
                        onChangeText={setValue}
                        onFocus={handleFocusAnotherInput}
                        keyboardType="numeric"
                    />
                    <DropDown
                        name="Categoria"
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
                        maxLength={500}
                    />

                    <Button textLabel="Registrar" onClick={handleSubmit} />
                </Form>
            </ScrollView>
        </Container>
    );
};

export default NewRegister;
