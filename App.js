import React, {useState} from 'react';
import { View, FlatList, StyleSheet, Alert} from 'react-native';
import Header from './components/Header';
import Task from './components/Task';
import AddTask from './components/AddTask';

const App = () => {

  const [items, setItems] = useState([]);

  const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id);
    })
  }

  const addItem = (item) => {

    if(!item) {
      Alert.alert('Error', 'Text field cannot be blank', {text: 'Ok'});
    } else {
      setItems(prevItems => {
        return [{id: Math.random().toString(), text: item},...prevItems]
      });
    }

  }


  return (
    <View style={styles.container}>
      <Header />
      <AddTask addItem={addItem}/>
      <FlatList data={items} renderItem={({item}) => <Task item={item} deleteItem={deleteItem}/>}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderTopWidth: 50,
    borderTopColor: '#e5dfdf',
  },
})

export default App;