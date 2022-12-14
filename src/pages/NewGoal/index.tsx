import React from 'react';
import { SimpleHeader } from '../../components/Headers';
import { Container } from './styles';

const NewGoal: React.FC = () => {
    return (
        <Container>
            <SimpleHeader title="Nova meta" />
        </Container>
    );
};

export default NewGoal;
