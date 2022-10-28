import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import {Image} from '@rneui/themed';
import styles from './src/styles/styles';
import img1 from './src/assets/img1.jpeg';

const App = () => {
  return (
    <View style={styles.main}>
      <Image
        source={img1}
        containerStyle={styles.item}
        PlaceholderContent={<ActivityIndicator />}
      />
    </View>
  );
};

export default App;
