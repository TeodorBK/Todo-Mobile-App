import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { LightColors } from '../../assets/Colors';

export default function CreateTodoButton({ navigation }) {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate('Create Todo Or Template')}
    >
      <Text style={styles.text}>+</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 'auto',
    marginBottom: 50,
    marginLeft: 'auto',
    marginRight: 20,
    backgroundColor: LightColors.theme,
    width: 60,
    height: 60,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 35,
    color: LightColors.white,
    textShadowColor: LightColors.black,
    textShadowOffset: { width: 3, height: 4 },
    textShadowRadius: 5,
  },
});
