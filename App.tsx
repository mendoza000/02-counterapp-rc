import React from 'react';
import {SafeAreaView} from 'react-native';
import {PaperProvider} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import {globalStyles} from './src/presentation/theme/global.styles';
import {BOMScreen} from './src/presentation/screens/BOMScreen';
// import {CounterM3Screen} from './src/presentation/screens/CounterM3Screen';
// import HelloWorldScreen from './src/presentation/screens/HelloWorldScreen';

const renderIcon = (props: any) => <Icon {...props} />;

const App = () => {
  return (
    <PaperProvider
      settings={{
        icon: renderIcon,
      }}>
      <SafeAreaView style={globalStyles.appContainer}>
        {/* <CounterScreen /> */}
        {/* <CounterM3Screen /> */}
        <BOMScreen />
      </SafeAreaView>
    </PaperProvider>
  );
};

export default App;
