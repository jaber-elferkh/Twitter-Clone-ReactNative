import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'whitesmoke',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  numberOfComments: {
    color: 'grey',
    marginLeft: 10,
  },
  numberOfRetweets: {
    color: 'grey',
    marginLeft: 10,
  },
  numberOfLikes: {
    color: 'grey',
    marginLeft: 10,
  },
});

export default styles;
