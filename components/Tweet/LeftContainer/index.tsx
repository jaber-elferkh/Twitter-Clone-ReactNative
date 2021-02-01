import React from 'react';
import { View, Text } from 'react-native';
import { UserType } from '../../../types';
import ProfilePicture from '../../ProfilePicture';

export type LeftContainerProps = {
  user: UserType;
};

const LeftContainer = ({ user }: LeftContainerProps) => (
  <View>
    {/* Propfile Picture */}
    <ProfilePicture image={user.image} size={60} />
  </View>
);

export default LeftContainer;
