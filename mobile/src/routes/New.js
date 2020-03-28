import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SelectProvider from '~/pages/New/SelectProvider';
import SelectDateTime from '~/pages/New/SelectDateTime';
import Confirm from '~/pages/New/Confirm';

const Stack = createStackNavigator();

export default function New() {
  return (
    <Stack.Navigator
      headerMode="screen"
      initialRouteName="SelectProvider"
      options={{
        resetOnBlur: true,
      }}>
      <Stack.Screen
        options={{
          headerTransparent: true,
          headerTintColor: '#fff',
          title: 'Selecione o prestador',
        }}
        name="SelectProvider"
        component={SelectProvider}
      />
      <Stack.Screen
        options={{
          title: 'Selecione o horário',
          headerTransparent: true,
          headerTintColor: '#fff',
        }}
        name="SelectDateTime"
        component={SelectDateTime}
        title="Selecione o horário"
      />
      <Stack.Screen
        options={{
          title: 'Confirmar Agendamento',
          headerTransparent: true,
          headerTintColor: '#fff',
        }}
        name="Confirm"
        component={Confirm}
      />
    </Stack.Navigator>
  );
}
