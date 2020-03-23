import React from 'react';
import {Image} from 'react-native';
import logo from '~/assets/logo.png';
import Background from '~/components/Background';

import {Container, Form, FormInput, SubmitButton} from './styles';

export default function SignUp({navigation}) {
  return (
    <Background>
      <Container>
        <Image source={logo} />
        <Form>
          <FormInput
            icon="person-outline"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Nome Completo"
          />
          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu e-mail"
          />
          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Digite sua senha"
          />
          <SubmitButton onPress={() => {}}>Criar Conta</SubmitButton>
        </Form>
      </Container>
    </Background>
  );
}
