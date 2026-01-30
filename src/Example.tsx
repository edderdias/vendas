import { useEffect, useState } from 'react';
import { Button, Text, View } from 'react-native';

interface ExampleProps {
  text: string;
  children?: string;
}

const Example = ({ children, text }: ExampleProps) => {
  const [newText, setNewText] = useState<string>();

  useEffect(() => {
    console.log('O texto foi alterado:', newText);
  }, [newText]);

  const handleOnPress = () => {
    setNewText('NOVO TEXTO');
  };

  return (
    <View>
      <Text>{children}</Text>
      <Text>{newText || text}</Text>

      <Button onPress={handleOnPress} title="BOTAO" />
    </View>
  );
};

export default Example;
