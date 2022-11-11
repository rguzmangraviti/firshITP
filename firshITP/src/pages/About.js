import React from 'react';
import {View, Text, FlatList, Image} from 'react-native';
import {Button, ListItem} from '@rneui/themed';
import styles from '../styles/styles';
import img1 from '../assets/img1.jpeg';
import img2 from '../assets/img2.jpeg';
import img3 from '../assets/img3.jpeg';
import img4 from '../assets/img4.jpeg';

const DATA = [
  {
    title: 'Empresa',
    description: 'Desarrollo de software',
    info: '7777777777',
  },
  {
    title: 'Área',
    description: 'Sistemas',
    info: '7777779999',
  },
  {
    title: 'Departamento',
    description: 'QA',
    info: '77777778877',
  },
  {
    title: 'Departamento',
    description: 'QA',
    info: '77777778877',
  },
  {
    title: 'Departamento',
    description: 'QA',
    info: '77777778877',
  },
  {
    title: 'Departamento',
    description: 'QA',
    info: '77777778877',
  },
];

const arrayImg = [img1, img2, img3, img4, img1, img2, img3, img4];

const itemRender = ({item}) => (
  <ListItem bottomDivider>
    <ListItem.Content>
      <ListItem.Title>{item.title}</ListItem.Title>
      <ListItem.Subtitle>{item.description}</ListItem.Subtitle>
      <ListItem.Subtitle>{item.info}</ListItem.Subtitle>
    </ListItem.Content>
  </ListItem>
);

const itemImg = ({item}) => <Image source={item} style={styles.listimg} />;

const keyExtractor = (item, index) => index.toString();

const About = ({navigation}) => {
  const irA = () => {
    navigation.navigate('PictureScreen');
  };
  return (
    <View style={styles.main}>
      <FlatList
        showsHorizontalScrollIndicator={true}
        horizontal={true}
        data={arrayImg}
        renderItem={itemImg}
        keyExtractor={keyExtractor}
      />
      <Text style={styles.description}>Acerca de</Text>
      <Button color="warning" title="Ir a -> Picture" onPress={irA} />
      <View style={styles.width100}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={DATA}
          renderItem={itemRender}
          keyExtractor={keyExtractor}
        />
      </View>
    </View>
  );
};

export default About;
