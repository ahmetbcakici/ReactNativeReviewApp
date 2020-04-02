import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView, View, Text,Button} from 'react-native';

import globalStyles from '../assets/styles/global';

const Home = ({navigation}) => {

    const pressHandler = () => {
            navigation.navigate('ReviewDetails')
    }

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Home Screen</Text>
      <Button title="Go to Review Details Screen" onPress={pressHandler} />
    </View>
  );
};

export default Home;
