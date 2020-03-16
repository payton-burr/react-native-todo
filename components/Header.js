import React from 'react';
import { View,  Text, StyleSheet} from 'react-native';

const Header = () => {

  return (
    <View style={styles.header}>
      <Text style={styles.text}>All Tasks</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    padding: 20,
    backgroundColor: '#6ba8a9',
    marginBottom: 5,
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 23,
  },
});

export default Header;