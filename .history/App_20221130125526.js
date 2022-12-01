import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from './screen/Home';
import RegisterScreen from './screen/Register';
import LoginScreen from './screen/Login';

const Stack = createStackNavigator();

import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen  name="Home" component={HomeScreen} />
        <Stack.Screen  name="Login" component={LoginScreen} />
        <Stack.Screen  name="Register" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
