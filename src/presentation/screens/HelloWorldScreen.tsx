import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface Props {
  name?: string;
}

const HelloWorldScreen = ({name = 'World'}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.hello}>Hello, {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  hello: {
    fontSize: 45,
    textAlign: 'center',
    padding: 20,
    color: 'black',
  },
});

export default HelloWorldScreen;
