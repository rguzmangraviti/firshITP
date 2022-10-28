import React, {useEffect, useState} from 'react';
import {View, ActivityIndicator, Text} from 'react-native';
import {Image, Button} from '@rneui/themed';
import styles from './src/styles/styles';
import img1 from './src/assets/img1.jpeg';
import img2 from './src/assets/img2.jpeg';
import img3 from './src/assets/img3.jpeg';
import img4 from './src/assets/img4.jpeg';
import {getText} from './src/services/getData';

const arrayImg = [img1, img2, img3, img4];

const App = () => {
  const [txt, setTxt] = useState('Valor por default');
  const [img, setImg] = useState(img4);

  useEffect(() => {
    updateTxtImg();
  }, []);

  const updateTxtImg = () => {
    getText().then(result => setTxt(result.fact));
    const itemRandom = arrayImg[Math.floor(Math.random() * arrayImg.length)];
    setImg(itemRandom);
  };

  return (
    <View style={styles.main}>
      <View style={styles.left}>
        <Button title="Actualizar" onPress={updateTxtImg} />
      </View>
      <Image
        source={img}
        containerStyle={styles.item}
        PlaceholderContent={<ActivityIndicator />}
      />
      <Text style={styles.txt}>{txt}</Text>
    </View>
  );
};

export default App;
