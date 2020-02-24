import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { signUpRequest } from '~/store/modules/auth/actions';

import logo from '~/assets/logo.svg';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string()
    .min(6, 'Mínimo de 6 caracteres')
    .required('A senha é obrigatória'),
  nome: Yup.string().required('O nome é obrigatório'),
});

export default function SignUp() {
  const dispatch = useDispatch();

  function handleSubmit({ nome, email, password }) {
    console.tron.log(nome, email, password);
    dispatch(signUpRequest(nome, email, password));
  }

  return (
    <>
      <img src={logo} alt="Gobarber" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="nome" placeholder="Nome Completo" />
        <Input name="email" type="email" placeholder="Digite seu email" />
        <Input name="password" type="password" placeholder="Digite sua senha" />

        <button type="submit">Criar conta</button>
        <Link to="/">Efetuar Login</Link>
      </Form>
    </>
  );
}
