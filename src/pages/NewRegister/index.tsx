import React, { useCallback, useState } from 'react';
import { Button } from '../../components/Buttons';
import Input from '../../components/Input';
import SimpleHeader from '../../components/SimpleHeader';
import { Container, Form } from './styles';

const NewRegister: React.FC = () => {
    const [name, setName] = useState('');
    const [value, setValue] = useState(0);
    const [date, setDate] = useState();
    const [description, setDescription] = useState('');

    const handleSubmit = useCallback(() => {
        const data = {
            name,
            value,
            date,
            description,
        };

        console.log(data);
    }, [name, value, date, description]);

    return (
        <Container>
            <SimpleHeader title="Novo Registro" />
            <Form>
                <Input placeholder="Nome" onChangeText={setName} />
                <Input placeholder="Valor" onChangeText={setValue} />
                <Input placeholder="Data" onChangeText={setDate} />
                <Input
                    placeholder="Descrição"
                    isTextAreaMode={true}
                    onChangeText={setDescription}
                />

                <Button textLabel="Registrar" onClick={handleSubmit} />
            </Form>
        </Container>
    );
};

export default NewRegister;
