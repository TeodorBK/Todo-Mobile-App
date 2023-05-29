import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { LightColors } from '../../assets/Colors';
import { useState } from 'react';

export default function Todo({ todo }) {
  const [todos, setTodos] = useState(todo);

  const date = new Date();

  const [dobbelClick, setDobbelClick] = useState(0);

  function TodoClick() {
    var delta = new Date().getTime() - dobbelClick;

    if (delta < 300) {
      console.log('Dobbel');
    }

    setDobbelClick(new Date().getTime());
    console.log(todos.type);
  }

  return (
    <TouchableOpacity
      style={[
        styles.container,
        todos.type === 'important'
          ? {
              backgroundColor: LightColors.boxBackClrImportant,
            }
          : {},
        todos.type === 'warning'
          ? {
              backgroundColor: LightColors.boxBackClrWarning,
            }
          : {},
      ]}
      onPress={() => TodoClick()}
    >
      <View style={styles.todoTextBox}>
        <Text style={styles.title}>{todo.title}</Text>
        <Text style={styles.description}>{todo.description}</Text>
      </View>
      <View>
        <TouchableOpacity
          style={styles.deleteButton}
          Press={() => console.log(todo.title)}
        >
          <Text style={styles.deleteIcon}>🗑️</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: 80,
    backgroundColor: LightColors.boxBackClr,
    borderRadius: 20,
    shadowColor: LightColors.shadowColor,
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    marginHorizontal: '5%',
    marginBottom: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  todoTextBox: {
    width: '80%',
    overflow: 'hidden',
  },
  title: {
    fontSize: 20,
    color: LightColors.theme,
    marginTop: 10,
    marginLeft: 10,
  },
  description: {
    marginTop: 10,
    marginLeft: 20,
    color: LightColors.baseClr,
  },
  deleteButton: {
    marginTop: 28,
    marginRight: 20,
  },
  deleteIcon: { fontSize: 20 },
});
