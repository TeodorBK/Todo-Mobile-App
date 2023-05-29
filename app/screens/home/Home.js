import { useContext, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { LightColors } from '../../../assets/Colors';
import BigBox from '../../components/BigBox';
import todoContext from '../../context/todoContext';

export default function Home({ navigation }) {
  const todoCtx = useContext(todoContext);

  return (
    <View style={styles.container}>
      <Text style={styles.topText}>Todo List</Text>

      <View style={styles.boxContainer}>
        <BigBox title="Year" navigation={navigation} />
        <BigBox title="Month" navigation={navigation} />
        <BigBox title="Week" navigation={navigation} />
        <BigBox title="Day" navigation={navigation} todos={todoCtx.todos} />
      </View>

      <Text style={styles.topText}>Extra:</Text>

      <View style={styles.boxContainer}>
        <BigBox title="Remember" navigation={navigation} />
        <BigBox title="Shoping" navigation={navigation} />
        <BigBox title="Wish List" navigation={navigation} />
        <BigBox title="Packing List" navigation={navigation} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: LightColors.backClr,
  },
  topText: {
    color: LightColors.theme,
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 20,
    marginTop: 50,
    marginBottom: 40,
  },
  boxContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
