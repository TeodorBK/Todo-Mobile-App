import { useContext } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { LightColors } from '../../../assets/Colors';
import todoContext from '../../context/todoContext';
import CreateTodoButton from '../../components/CreateTodoButton';
import Todo from '../../components/Todo';

export default function Day({ navigation }) {
  const todoCtx = useContext(todoContext);
  return (
    <View style={styles.container}>
      <Text style={styles.topText}>Todays todo`s</Text>

      <ScrollView style={styles.scrollView}>
        {todoCtx.todos.map((todo) => {
          return <Todo key={todo.title} todo={todo} />;
        })}
      </ScrollView>

      <CreateTodoButton
        style={styles.createTodoButton}
        navigation={navigation}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: LightColors.backClr,
  },
  topText: {
    marginVertical: 30,
    marginHorizontal: 20,
    fontSize: 25,
    fontWeight: 'bold',
    color: LightColors.theme,
  },
  scrollView: {
    width: '100%',
  },
});
