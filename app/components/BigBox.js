import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { LightColors } from '../../assets/Colors';

export default function BigBox({ title, todos, emoji, navigation }) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate(title)}
    >
      <Text style={styles.title}>{title}</Text>
      {todos ? (
        <Text style={styles.todoCount}>{'Todos: ' + todos.length}</Text>
      ) : (
        ''
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: LightColors.boxBackClr,
    borderRadius: 20,
    shadowColor: LightColors.shadowColor,
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    width: 156,
    height: 80,
    marginHorizontal: 20,
    marginBottom: 20,
  },
  title: {
    marginLeft: 20,
    marginTop: 15,
    fontSize: 20,
    color: LightColors.theme,
  },
  todoCount: {
    marginLeft: 20,
    marginTop: 15,
    color: LightColors.baseClr,
  },
});
