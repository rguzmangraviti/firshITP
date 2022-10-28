import React, {useEffect, useState} from 'react';
import {View, ActivityIndicator, Text} from 'react-native';
import {Image, Button} from '@rneui/themed';
import styles from './src/styles/styles';
import img1 from './src/assets/img1.jpeg';
import {getText} from './src/services/getData';

const App = () => {
  const [txt, setTxt] = useState('Valor por default');

  useEffect(() => {
    updateTxt();
  }, []);

  const updateTxt = () => getText().then(result => setTxt(result.fact));

  return (
    <View style={styles.main}>
      <View style={styles.left}>
        <Button title="Actualizar" onPress={updateTxt} />
      </View>
      <Image
        source={img1}
        containerStyle={styles.item}
        PlaceholderContent={<ActivityIndicator />}
      />
      <Text style={styles.txt}>{txt}</Text>
    </View>
  );
};

export default App;
