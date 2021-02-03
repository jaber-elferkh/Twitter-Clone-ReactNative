import React from 'react';
import { View, Text, FlatList } from 'react-native';
import TweetsData from '../../data/TweetsData';
import Tweet from '../Tweet';
import styles from './styles';

const Feed = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={TweetsData}
        renderItem={({ item }) => <Tweet tweet={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Feed;
