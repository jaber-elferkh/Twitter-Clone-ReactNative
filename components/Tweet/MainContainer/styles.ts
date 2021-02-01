import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
    flex: 1,
  },
  PostContainer: {
    borderRadius: 15,
    padding: 10,
    borderWidth: 1,
    borderColor: 'whitesmoke',
    marginBottom: 5,
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
  content: {
    marginTop: 5,
    // marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginTop: 10,
    borderRadius: 15,
    overflow: 'hidden',
  },
});

export default styles;
