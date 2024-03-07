import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';

interface Props {
  onPress?: () => void;
  onLongPress?: () => void;
  label: string;
}

export const PrimaryButton = (props: Props) => {
  return (
    <Pressable
      style={styles.actionButton}
      onLongPress={() => props.onLongPress && props.onLongPress()}
      onPress={() => props.onPress && props.onPress()}>
      <Text style={styles.actionButtonText}>{props.label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  actionButton: {
    textAlign: 'center',
    color: 'black',
    fontWeight: '300',
    backgroundColor: '#5856d6',
    padding: 15,
    borderRadius: 30,
  },
  actionButtonText: {
    color: 'white',
    fontSize: 20,
  },
});
