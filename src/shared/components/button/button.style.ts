import styled from 'styled-components/native';

interface ButtonConteinerProps {
  margin?: string;
}

export const ButtonContainer = styled.TouchableOpacity<ButtonConteinerProps>`
  width: 100%;
  height: 48px;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  ${(props: ButtonConteinerProps) => (props.margin ? `margin: ${props.margin};` : '')}
  background-color: blue;
`;
