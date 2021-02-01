import * as React from 'react';
import { StyleSheet } from 'react-native';
import { View } from '../components/Themed';
import Tweet from '../components/Tweet';
import TweetsData from '../data/TweetsData';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Tweet tweet={TweetsData[0]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
