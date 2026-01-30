import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

import Example from './Example';

const TextNew = styled.Text`
  font-size: 24px;
  color: pink;
`;

const App = () => {
  return (
    <SafeAreaView>
      <Example text="ABC">Teste 2</Example>
      <Example text="João" />
      <Text style={styles.container}>Testando</Text>
      <TextNew>New Teste</TextNew>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    color: 'blue',
  },
});

export default App;
