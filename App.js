import React, {useState} from 'react';
import { View, FlatList, StyleSheet, Alert} from 'react-native';
import Header from './components/Header';
import Task from './components/Task';

const App = () => {

  const [items, setItems] = useState([
    {id: Math.random().toString(), text: 'Go to gym'},
    {id: Math.random().toString(), text: 'Study for test'},
  ]);

  const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id);
    })
  }


  return (
    <View style={styles.container}>
      <Header />
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