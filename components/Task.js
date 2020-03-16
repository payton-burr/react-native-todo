import React from 'react';
import { View,  Text, StyleSheet} from 'react-native';

const Task = ({item, deleteItem}) => {

  return (
      <View style={styles.view}>
        <Text style={styles.text}>{item.text}</Text>
        <Text style={styles.btnDlt} onPress={() => deleteItem(item.id)}>Delete</Text>
      </View>
  )
}

const styles = StyleSheet.create({
  view: {
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#eee',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  text: {
    fontSize: 18
  },
  btnDlt: {
    color: '#c02739',
    fontSize: 15,
    borderColor: '#c02739',
    borderWidth: 1,
    borderRadius: 6,
    padding: 5,
  },
});

export default Task;