import { Text, View } from 'react-native';

import Button from '../../../shared/components/button/Button';
import Input from '../../../shared/components/input/input';
import { ContainerLogin } from '../styles/login.style';

const Login = () => {
  const handleOnPress = () => {
    console.log('Clicou');
  };
  return (
    <View>
      <ContainerLogin>
        <Text>Primeiro App</Text>
        <Input />
        <Button margin="16px" title="Entrar" onPress={handleOnPress} />
      </ContainerLogin>
    </View>
  );
};

export default Login;
