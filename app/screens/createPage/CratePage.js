import { useContext, useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { LightColors } from '../../../assets/Colors';
import todoContext from '../../context/todoContext';

export default function CreatePage({ navigation }) {
  const todoCtx = useContext(todoContext);

  const [createmethodSelected, setCreatemethodSelected] = useState('todo');

  const [todoTitle, setTodoTitle] = useState('');
  const [todoDescription, setTodoDescription] = useState('');
  const [todoType, setTodoType] = useState('None');

  const [typeSelector, setTypeSelecor] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.topCreateBox}>
        <TouchableOpacity onPress={(e) => setCreatemethodSelected('todo')}>
          <Text
            style={[
              styles.topText,
              createmethodSelected === 'todo' ? styles.topTextSelected : '',
            ]}
          >
            Create Todo
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={(e) => setCreatemethodSelected('template')}>
          <Text
            style={[
              styles.topText,
              createmethodSelected === 'template' ? styles.topTextSelected : '',
            ]}
          >
            Create Template
          </Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.inputLabel}>Title:</Text>
      <TextInput
        style={styles.inputField}
        onChangeText={(e) => setTodoTitle(e)}
        value={todoTitle}
        placeholder="Todo Title"
        //keyboardType="numeric"
      />

      <Text style={styles.inputLabel}>Description:</Text>
      <TextInput
        style={styles.inputField}
        onChangeText={(e) => setTodoDescription(e)}
        value={todoDescription}
        placeholder="Todo Description"
        //keyboardType="numeric"
      />

      <Text style={styles.inputLabel}>Type:</Text>
      <TouchableOpacity
        style={styles.typeInput}
        onPress={(e) => setTypeSelecor((prevState) => !prevState)}
      >
        <Text style={styles.typeInputText}>{todoType}</Text>
      </TouchableOpacity>

      {typeSelector ? (
        <View style={styles.selectorBox}>
          <TouchableOpacity
            style={styles.selectItem}
            onPress={() => {
              setTypeSelecor((prevState) => !prevState);
              setTodoType('none');
            }}
          >
            <Text style={styles.selectItemText}>None</Text>
            <View style={styles.miniTodoContainer}>
              <View style={styles.miniTodoTextBox}>
                <Text style={styles.miniTodoTitle}>Title</Text>
                <Text style={styles.miniTodoDescription}>Description</Text>
              </View>
              <View>
                <View
                  style={styles.miniTodoDeleteButton}
                  Press={() => console.log(todo.title)}
                >
                  <Text style={styles.miniTodoDeleteIcon}>🗑️</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.selectItem, styles.selectItemI]}
            onPress={() => {
              setTypeSelecor((prevState) => !prevState);
              setTodoType('important');
            }}
          >
            <Text style={styles.selectItemText}>Important</Text>
            <View style={[styles.miniTodoContainer, styles.miniTodoContainerI]}>
              <View style={styles.miniTodoTextBox}>
                <Text style={styles.miniTodoTitle}>Title</Text>
                <Text style={styles.miniTodoDescription}>Description</Text>
              </View>
              <View>
                <View
                  style={styles.miniTodoDeleteButton}
                  Press={() => console.log(todo.title)}
                >
                  <Text style={styles.miniTodoDeleteIcon}>🗑️</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.selectItem, styles.selectItemW]}
            onPress={() => {
              setTypeSelecor((prevState) => !prevState);
              setTodoType('warning');
            }}
          >
            <Text style={styles.selectItemText}>Warning</Text>
            <View style={[styles.miniTodoContainer, styles.miniTodoContainerW]}>
              <View style={styles.miniTodoTextBox}>
                <Text style={styles.miniTodoTitle}>Title</Text>
                <Text style={styles.miniTodoDescription}>Description</Text>
              </View>
              <View>
                <View
                  style={styles.miniTodoDeleteButton}
                  Press={() => console.log(todo.title)}
                >
                  <Text style={styles.miniTodoDeleteIcon}>🗑️</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      ) : (
        ''
      )}

      <TouchableOpacity
        style={styles.createButton}
        onPress={() => {
          todoCtx.addDailyTodo(todoTitle, todoDescription, todoType);
          navigation.goBack();
        }}
      >
        <Text style={styles.createButtonText}>Create Todo</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  topCreateBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  topText: {
    marginTop: 25,
    marginHorizontal: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: LightColors.theme,
    opacity: 0.5,
  },
  topTextSelected: {
    marginTop: 22.5,
    marginHorizontal: 18.5,
    fontSize: 25,
    fontWeight: 'bold',
    color: LightColors.theme,
    opacity: 1,
    textDecorationLine: 'underline',
  },
  inputLabel: {
    marginTop: 30,
    marginLeft: 20,
    fontSize: 18,
  },
  inputField: {
    height: 40,
    width: '90%',
    marginTop: 10,
    marginHorizontal: '5%',
    backgroundColor: LightColors.boxBackClr,
    shadowColor: LightColors.shadowColor,
    shadowOffset: { white: 2, height: 4 },
    shadowRadius: 5,
    shadowOpacity: 0.1,
    borderWidth: 2,
    borderColor: LightColors.boxBorderClr,
    borderRadius: 10,
    padding: 10,
  },
  typeInput: {
    height: 40,
    width: '90%',
    marginTop: 10,
    marginHorizontal: '5%',
    backgroundColor: LightColors.boxBackClr,
    shadowColor: LightColors.shadowColor,
    shadowOffset: { white: 2, height: 4 },
    shadowRadius: 5,
    shadowOpacity: 0.1,
    borderWidth: 2,
    borderColor: LightColors.boxBorderClr,
    borderRadius: 10,
    padding: 10,
  },
  typeInputText: {
    color: LightColors.baceClr2,
  },
  selectorBox: {
    width: '90%',
    height: 120,
    backgroundColor: LightColors.boxBackClr,
    marginHorizontal: '5%',
    marginTop: -40,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: LightColors.boxBorderClr,
  },
  selectItem: {
    height: 40,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  selectItemI: {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  },
  selectItemW: {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  },
  selectItemText: {
    marginLeft: 10,
  },
  miniTodoContainer: {
    width: '30%',
    height: 30,
    backgroundColor: LightColors.boxBackClr,
    borderRadius: 7,
    shadowColor: LightColors.shadowColor,
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    marginHorizontal: '5%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  miniTodoContainerI: {
    borderWidth: 1,
    borderColor: LightColors.baseImportant,
    backgroundColor: LightColors.boxBackClrImportant,
  },
  miniTodoContainerW: {
    borderWidth: 1,
    borderColor: LightColors.baseWarning,
    backgroundColor: LightColors.boxBackClrWarning,
  },
  miniTodoTextBox: {
    width: '80%',
    overflow: 'hidden',
  },
  miniTodoTitle: {
    fontSize: 10,
    color: LightColors.theme,
    marginTop: 5,
    marginLeft: 5,
  },
  miniTodoDescription: {
    marginTop: 1,
    marginLeft: 10,
    color: LightColors.baceClr,
    fontSize: 7,
  },
  miniTodoDeleteButton: {
    marginTop: 10,
    marginRight: 5,
  },
  miniTodoDeleteIcon: {
    fontSize: 8,
  },

  createButton: {
    width: 300,
    height: 50,
    backgroundColor: LightColors.theme,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 'auto',
    marginBottom: 50,
    marginLeft: 49,
  },
  createButtonText: {
    fontSize: 25,
    color: LightColors.white,
  },
});
