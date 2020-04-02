import React, {useState} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

import Navigator from '../routes/homeStack';
import globalStyles from '../assets/styles/global';

const ReviewDetails = ({route, navigation}) => {
  const pressHandler = () => {
    navigation.goBack();
  };

  const {key,title,body,rating} = route.params;

  return (
    <View style={styles.container}>
      <Text>ReviewDetails Screen</Text>
      <Text>{title}</Text>
      <Button title="Turn to back manually" onPress={pressHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
});

export default ReviewDetails;
