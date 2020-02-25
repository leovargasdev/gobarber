import React from 'react';
import { Input, Form } from '@rocketseat/unform';
import { useDispatch, useSelector } from 'react-redux';

import { Container } from './styles';
import { signOut } from '~/store/modules/auth/actions';
import { updateProfileRequest } from '~/store/modules/user/actions';

import AvatarInput from './AvatarInput';

export default function Profile() {
  const profile = useSelector(state => state.user.profile);
  const dispatch = useDispatch();

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <AvatarInput name="avatar_id" />

        <Input name="name" placeholder="Nome completo" />
        <Input name="email" placeholder="Seu endereço de e-mail" type="email" />

        <hr />

        <Input
          name="oldPassword"
          placeholder="Sua atual senha"
          type="password"
        />
        <Input name="password" placeholder="Nova senha" type="password" />
        <Input
          name="confirmPassword"
          placeholder="Confirmar nova senha"
          type="password"
        />
        <button type="submit">Atualizar Perfil</button>
      </Form>
      <button type="button" onClick={handleSignOut}>
        Sair do Gobarber
      </button>
    </Container>
  );
}
