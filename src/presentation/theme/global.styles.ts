import {Platform, StyleSheet} from 'react-native';

export const globalStyles = StyleSheet.create({
  appContainer: {
    backgroundColor: '#fffffe',
    flex: 1,
  },
  containerCenter: {
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
  fabRight: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: Platform.OS === 'android' ? 15 : 0,
    backgroundColor: '#16161a',
  },
  fabLeft: {
    position: 'absolute',
    margin: 16,
    left: 0,
    bottom: Platform.OS === 'android' ? 15 : 0,
    backgroundColor: '#16161a',
  },
});
