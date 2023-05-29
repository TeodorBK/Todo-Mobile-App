import { StyleSheet, Text, View } from 'react-native';
import { Calendar } from 'react-native-calendars';

export default function CalendarBox() {
  return (
    <View style={styles.container}>
      <Calendar
        style={{
          borderWidth: 2,
          borderColor: 'gray',
          height: 350,
        }}
      />

      <Text>Calendar</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    opacity: 0.5,
    height: 120,
    overflow: 'hidden',
  },
});
