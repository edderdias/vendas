import { View } from 'react-native';

import logo from '../../../assets/images/logo.png';
import Button from '../../../shared/components/button/Button';
import { Icon } from '../../../shared/components/icon/icon';
import Input from '../../../shared/components/input/input';
import { theme } from '../../../shared/themes/theme';
import { ContainerLogin, ImageLogo } from '../styles/login.style';

const Login = () => {
  const handleOnPress = () => {
    console.log('Clicou');
  };
  return (
    <View>
      <ContainerLogin>
        <ImageLogo resizeMode="center" source={logo} />
        <Input margin="0px 0px 4px 8px" placeholder="Digite seu email" title="Email:" />
        <Input placeholder="Digite sua senha" title="Senha:" secureTextEntry />
        <Icon name="home3" />
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
