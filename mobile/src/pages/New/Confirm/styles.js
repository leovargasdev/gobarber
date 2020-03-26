import styled from 'styled-components/native';
import Button from '~/components/Button';

export const Container = styled.SafeAreaView`
  flex: 1;
  padding: 0 30px;

  justify-content: center;
  align-items: center;
`;

export const Avatar = styled.Image`
  border-radius: 60px;
  width: 120px;
  height: 120px;
`;

export const Name = styled.Text`
  margin-top: 10px;
  font-weight: bold;
  font-size: 20px;
  color: #fff;
`;

export const Time = styled.Text`
  margin-top: 4px;
  font-size: 18px;
  color: rgba(255, 255, 255, 0.6);
`;
export const SubmitButton = styled(Button)`
  align-self: stretch;
  margin-top: 20px;
`;
