import React, { useState } from 'react';
import { View,  Text, StyleSheet, TextInput} from 'react-native';

const AddTask = ({addItem}) => {

  const [text, setText] = useState('');
  const onChange = (val) => setText(val);

  return (

    <View style={styles.header}>
    <TextInput placeholder="Enter Task" onChangeText={onChange} style={styles.input}/>
      <Text style={styles.btnAdd} onPress={() => addItem(text)}>Add Item</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 60,
    padding: 8,
    fontSize: 16,
    backgroundColor: '#f8f8f8',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    margin: 10
  },
  btnAdd: {
    backgroundColor: '#50bda1',
    padding: 11,
    margin: 10,
    marginTop: 0,
    color: '#fff',
    fontSize: 19,
    textAlign: 'center',
    width: 100,
  },
});

export default AddTask;