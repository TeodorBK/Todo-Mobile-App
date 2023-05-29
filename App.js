import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './app/screens/home/Home';
import Year from './app/screens/home/Year';
import Month from './app/screens/home/Month';
import Week from './app/screens/home/Week';
import Day from './app/screens/home/Day';
import Remember from './app/screens/home/Remember';
import CreatePage from './app/screens/createPage/CratePage';
import { TodoContextProvider } from './app/context/todoContext';

const RootStack = createNativeStackNavigator();

export default function App() {
  return (
    <TodoContextProvider>
      <NavigationContainer>
        <RootStack.Navigator>
          <RootStack.Screen name="Home" component={Home} />
          <RootStack.Screen name="Year" component={Year} />
          <RootStack.Screen name="Month" component={Month} />
          <RootStack.Screen name="Week" component={Week} />
          <RootStack.Screen name="Day" component={Day} />
          <RootStack.Screen name="Remember" component={Remember} />
          <RootStack.Screen
            name="Create Todo Or Template"
            component={CreatePage}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    </TodoContextProvider>
  );
}
