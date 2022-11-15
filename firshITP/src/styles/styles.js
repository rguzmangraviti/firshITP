import {StyleSheet, Dimensions} from 'react-native';
import {background, primary} from './colors';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: background,
  },
  left: {
    width,
    justifyContent: 'center',
    alignItems: 'flex-start',
    margin: 15,
    padding: 15,
  },
  textPrimary: {
    color: primary,
  },
  title: {
    color: primary,
    fontSize: 18,
  },
  item: {
    width: width - 30,
    height: width - 30,
    resizeMode: 'cover',
    backgroundColor: 'red',
  },
  listimg: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    backgroundColor: 'red',
  },
  txt: {
    fontSize: 18,
    width: width - 30,
  },
  description: {
    color: 'blue',
    fontSize: 18,
  },
  width100: {
    width: '100%',
  },
});

export default styles;
