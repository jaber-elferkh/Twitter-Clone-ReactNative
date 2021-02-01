import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
    borderWidth: 1,
    borderColor: 'whitesmoke',
    borderRadius: 15,
    padding: 10,
    flex: 1,
  },
  TopCotainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  TopCotainerLeft: {
    flexDirection: 'row',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  username: {
    color: 'grey',
    marginLeft: 7,
  },
  createdAt: {
    color: 'grey',
    marginLeft: 7,
  },
  moreIcon: {},
});

export default styles;
