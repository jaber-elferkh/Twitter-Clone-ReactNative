import { AntDesign } from '@expo/vector-icons';
import * as React from 'react';
import { StyleSheet, Text } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import ProfilePicture from '../components/ProfilePicture';
import { View } from '../components/Themed';
import Colors from '../constants/Colors';

export default function NewTweetScreen() {
  const onPressTweet = () => {
    console.log('onPress Tweet');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <AntDesign name="close" size={30} color={Colors.light.tint} />
        <TouchableOpacity style={styles.button} onPress={onPressTweet}>
          <Text style={styles.buttonText}>Tweet</Text>
        </TouchableOpacity>
      </View>
      <View>
        <ProfilePicture
          image={
            'https://images.unsplash.com/photo-1515121240746-1fc801ba75a8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80'
          }
        />
        <View style={styles.inputsContainer}>
          <TextInput style={styles.tweetInput} placeholder="What's hapening" />
          <TextInput
            style={styles.imageInput}
            placeholder="Image Url (optional)"
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  headerContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    padding: 15,
    paddingTop: 30,
  },
  button: {
    backgroundColor: Colors.light.tint,
    borderRadius: 30,
  },
  buttonText: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  inputsContainer: {},
  tweetInput: {},
  imageInput: {},
});
