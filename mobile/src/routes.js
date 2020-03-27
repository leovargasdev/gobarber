import React from 'react';
import {TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {useSelector} from 'react-redux';
import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';
import Dashboard from '~/pages/Dashboard';
import Profile from '~/pages/Profile';
import SelectProvider from '~/pages/New/SelectProvider';
import SelectDateTime from '~/pages/New/SelectDateTime';
import Confirm from '~/pages/New/Confirm';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function New() {
  return (
    <Stack.Navigator
      headerMode="screen"
      initialRouteName="SelectProvider"
      options={{
        resetOnBlur: true
      }}
    >
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

function App() {
  return (
    <Tab.Navigator initialRouteName="Dashboard">
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarLabel: 'Agendamentos',
          tabBarIcon: ({color}) => (
            <Icon name="event" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="New"
        component={New}
        options={{
          tabBarLabel: 'Agendar',
          tabBarIcon: ({color}) => (
            <Icon name="add-circle-outline" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Meu Perfil',
          tabBarIcon: ({color}) => (
            <Icon name="person" size={20} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function Routes() {
  const signed = useSelector(state => state.auth.signed);

  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        {signed === true ? (
          <Stack.Screen name="App" component={App} />
        ) : (
          <>
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="SignUp" component={SignUp} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Routes;