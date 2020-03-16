import React from 'react';
import { View,  Text, StyleSheet} from 'react-native';

const Task = ({item}) => {

  return (
    <View style={styles.header}>
      <Text style={styles.text}>{item.text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({

});

export default Task;