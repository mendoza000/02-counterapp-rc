import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from 'react-native-paper';

const CounterScreen = () => {
  const [counter, setCounter] = React.useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{counter}</Text>

      {/* <PrimaryButton
        onPress={() => setCounter(counter + 1)}
        onLongPress={() => setCounter(0)}
        label="Increment"
      /> */}

      <Button
        mode="contained"
        onPress={() => setCounter(counter + 1)}
        onLongPress={() => setCounter(0)}>
        Increment
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 80,
    textAlign: 'center',
    color: 'black',
    fontWeight: '300',
  },
});

export default CounterScreen;
