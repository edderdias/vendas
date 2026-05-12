import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';

import { theme } from '../../themes/theme';

interface ButtonConteinerProps {
  margin?: string;
}

export const ButtonContainer = styled.TouchableOpacity<ButtonConteinerProps>`
  width: 100%;
  height: 48px;
  border-radius: 4px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  ${(props: ButtonConteinerProps) => (props.margin ? `margin: ${props.margin};` : '')}
`;

export const GradientButton = styled(LinearGradient)<ButtonConteinerProps>`
  width: 100%;
  height: 100%;
  border-radius: 4px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  ${(props: ButtonConteinerProps) => (props.margin ? `margin: ${props.margin};` : '')}
`;

export const ButtonSecondary = styled(ButtonContainer)<ButtonConteinerProps>`
  background-color: transparent;
  border-width: 1px;
  border-color: ${theme.colors.mainTheme.primary};
`;

export const ButtonDisabled = styled(ButtonContainer)<ButtonConteinerProps>`
  background-color: ${theme.colors.grayTheme.gray100};
  /* border-width: 1px;
  border-color: ${theme.colors.grayTheme.gray80}; */
`;

export const ActivityIndicatorButton = styled.ActivityIndicator`
  margin-left: 8px;
`;
