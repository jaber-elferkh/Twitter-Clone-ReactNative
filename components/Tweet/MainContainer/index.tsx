import { Entypo } from '@expo/vector-icons';
import React from 'react';
import { View, Text, Image } from 'react-native';
import TweetsData from '../../../data/TweetsData';
import { TweetType } from '../../../types';
import Footer from './Footer';
import styles from './styles';

export type MainContainerProps = {
  tweet: TweetType;
};

const MainContainer = ({ tweet }: MainContainerProps) => (
  <View style={styles.container}>
    <View style={styles.PostContainer}>
      <View style={styles.TopCotainer}>
        <View style={styles.TopCotainerLeft}>
          <Text style={styles.name}>{tweet.user.name}</Text>
          <Text style={styles.username}>@{tweet.user.username}</Text>
          <Text style={styles.createdAt}>33m</Text>
        </View>
        <Entypo
          style={styles.moreIcon}
          name="chevron-down"
          size={16}
          color="grey"
        />
      </View>
      <View style={styles.content}>
        <Text>{tweet.content}</Text>
        {!!tweet.image && (
          <Image style={styles.image} source={{ uri: tweet.image }} />
        )}
      </View>
    </View>
    <Footer tweet={tweet} />
  </View>
);

export default MainContainer;
