import { View } from 'react-native';

import Button from '../../../shared/components/button/Button';
import Input from '../../../shared/components/input/input';
import { theme } from '../../../shared/themes/theme';
import { ContainerLogin } from '../styles/login.style';

const Login = () => {
  const handleOnPress = () => {
    console.log('Clicou');
  };
  return (
    <View>
      <ContainerLogin>
        <Input margin="0px 0px 4px 8px" placeholder="Digite seu email" title="Email:" />
        <Input placeholder="Digite sua senha" title="Senha:" secureTextEntry />
        <Button
          type={theme.buttons.buttonsTheme.primary}
          margin="16px"
          title="Entrar"
          onPress={handleOnPress}
        />
      </ContainerLogin>
    </View>
  );
};

export default Login;
