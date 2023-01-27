import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import styles from './styles';

function WelcomeScreen(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello world!</Text>
    </SafeAreaView>
  );
}

export default React.memo(WelcomeScreen);
