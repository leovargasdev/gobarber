import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const ProvidersList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  numColumns: 2,
})`
  padding: 0 20px;
  margin-top: 60px;
`;

export const Provider = styled(RectButton)`
  border-radius: 4px;
  background: #fff;
  padding: 20px;
  flex: 1;

  align-items: center;
  margin: 0 10px 20px;
`;

export const Avatar = styled.Image`
  border-radius: 25px;
  width: 50px;
  height: 50px;
`;

export const Name = styled.Text`
  margin-top: 15px;
  font-weight: bold;
  font-size: 14px;
  color: #333;
  text-align: center;
`;
