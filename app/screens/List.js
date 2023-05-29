import React, { useEffect } from 'react';
import { View } from 'react-native';

export default function List({ navigation }) {
  return <View></View>;
}

/*import FIRESTORE_DB from '../../firebaseConfig';
import { addDoc, collection } from 'firebase/firestore';
async function addTodo() {
    const doc = await addDoc(collection(FIRESTORE_DB, 'todos'), {
      title: 'Testing Testing',
      done: false,
    });
    console.log('🚀 ~ file: List.jsx:12 ~addTodo ~ doc:' + doc);
  }*/
