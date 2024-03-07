import React from 'react';
import {Text, View} from 'react-native';
import {globalStyles} from '../theme/global.styles';
import {FAB} from 'react-native-paper';
// import Icon from 'react-native-vector-icons/Ionicons';

export const CounterM3Screen = () => {
  const [counter, setCounter] = React.useState(5);

  return (
    <View style={globalStyles.containerCenter}>
      <Text style={globalStyles.title}>{counter}</Text>

      {/* <Icon name="accessibility-outline" color={'black'} size={25} /> */}

      <FAB
        onPress={() => setCounter(counter + 1)}
        onLongPress={() => setCounter(0)}
        style={globalStyles.fabRight}
        icon={'add'}
      />

      <FAB
        onPress={() => setCounter(counter - 1)}
        onLongPress={() => setCounter(0)}
        style={globalStyles.fabLeft}
        icon={'remove'}
      />
    </View>
  );
};
