// https://reactnavigation.org/docs/params/

import { View, Text, Button } from "react-native";

//READ ALL, CREATE NEW USER, DELETE USER, UPDATAE USER, READ A SINGLE USER PROFILE
export default function Home() {

  //retrieve data from firestore and show it here
  const GetData = async ()=> {
  }

  return (
    <View>
      <Button title='GetData' onPress={()=>GetData()} />
    </View>
  );
}
