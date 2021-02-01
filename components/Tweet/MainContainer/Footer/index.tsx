import { AntDesign, EvilIcons, Feather } from '@expo/vector-icons';
import React from 'react';
import { View, Text } from 'react-native';
import { TweetType } from '../../../../types';
import styles from './styles';

export type FooterProps = {
  tweet: TweetType;
};

const Footer = ({ tweet }: FooterProps) => (
  <View style={styles.container}>
    <View style={styles.iconContainer}>
      <Feather name={'message-circle'} size={20} color="grey" />
      <Text style={styles.numberOfComments}>{tweet.numberOfComments}</Text>
    </View>
    <View style={styles.iconContainer}>
      <EvilIcons name={'retweet'} size={30} color="grey" />
      <Text style={styles.numberOfRetweets}>{tweet.numberOfRetweets}</Text>
    </View>
    <View style={styles.iconContainer}>
      <AntDesign name={'hearto'} size={20} color="grey" />
      <Text style={styles.numberOfLikes}>{tweet.numberOfLikes}</Text>
    </View>
    <View>
      <EvilIcons name={'share-google'} size={20} color="grey" />
    </View>
  </View>
);

export default Footer;
