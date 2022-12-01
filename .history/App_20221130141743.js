import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from './screen/Home';
import RegisterScreen from './screen/Register';
import LoginScreen from './screen/Login';

const Stack = createStackNavigator();

import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChoXqfva42ziSxyQTRgxDKC2V1-n8Q8-g",
  authDomain: "login-with-firebase-8dd28.firebaseapp.com",
  projectId: "login-with-firebase-8dd28",
  storageBucket: "login-with-firebase-8dd28.appspot.com",
  messagingSenderId: "234966019141",
  appId: "1:234966019141:web:b5d4d804b90397e259472c"
};

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
