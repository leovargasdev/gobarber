import React, {useEffect, useState} from 'react';
import api from '~/services/api';
import { useIsFocused } from '@react-navigation/native';

import Background from '~/components/Background';
import Appointment from '~/components/Appointment';
import {Container, Title, List} from './styles';

export default function Dashboard() {
  const isFocused = useIsFocused();
  const [appointments, setAppointments] = useState([]);

  async function loadAppointments() {
    const response = await api.get('appointments');
    setAppointments(response.data);
  }

  useEffect(() => {
    if (isFocused) {
      loadAppointments();
    }
  }, [isFocused]);

  async function handleCancel(id) {
    const response = await api.delete(`appointments/${id}`);
    setAppointments(
      appointments.map(ap =>
        ap.id === id ? {...ap, canceled_at: response.data.canceled_at} : ap,
      ),
    );
  }

  return (
    <Background>
      <Container>
        <Title>Agendamento</Title>

        <List
          data={appointments}
          keyExtractor={item => String(item)}
          renderItem={({item}) => (
            <Appointment onCancel={() => handleCancel(item.id)} data={item} />
          )}
        />
      </Container>
    </Background>
  );
}
