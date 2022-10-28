import React, {useEffect, useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Button, Input} from '@rneui/themed';
import HolaMundo from './src/componets/HolaMundo';
import Title from './src/componets/Title';
import styles from './src/styles/styles';
import {getText} from './src/services/getData';

const App = () => {
  const [text, setTexto] = useState('');
  const [fact, setFact] = useState('');

  useEffect(() => {
    getText().then(result => {
      console.log(result, result.fact);
      setFact(result.fact);
    });
  }, []);

  return (
    <View style={styles.main}>
      <Button title="Solid" />
      <Button title="Outline" type="outline" />
      <Button title="Clear" type="clear" />

      <Input placeholder="BASIC INPUT" value={text} onChangeText={setTexto} />

      <HolaMundo
        parametro1={text}
        propiedad2="red"
        fontSize={18}
        value={true}
      />
      <TouchableOpacity>
        <HolaMundo
          parametro1="adios"
          propiedad2="blue"
          fontSize={24}
          value={true}
        />
      </TouchableOpacity>
      <HolaMundo
        parametro1={fact}
        propiedad2="green"
        fontSize={28}
        value={false}
      />
      <Title />
    </View>
  );
};

export default App;
