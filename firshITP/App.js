import React from "react";
import {TouchableOpacity, View} from "react-native";
import HolaMundo from "./src/componets/HolaMundo";
import styles from "./src/styles/styles";

const App = () => {
  return (
    <View style={styles.main}>
      <HolaMundo
        parametro1="hola"
        propiedad2="red"
        fontSize={18}
        value={true}
      />
      <TouchableOpacity>
        <HolaMundo
          parametro1="hola"
          propiedad2="red"
          fontSize={24}
          value={true}
        />
      </TouchableOpacity>
      <HolaMundo
        parametro1="hola"
        propiedad2="red"
        fontSize={28}
        value={false}
      />
    </View>
  );
};

export default App;