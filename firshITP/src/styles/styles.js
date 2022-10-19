import {StyleSheet} from "react-native";
import { primary } from "./colors";

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: primary,
  },
  textPrimary: {
    color: primary,
  },
  title:{
    color: primary,
    fontSize: 18,
  }
});

export default styles;