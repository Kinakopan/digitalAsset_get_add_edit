import { View, Text, Button, Image, TextInput } from 'react-native';
import { collection, getDocs, addDoc, setDoc } from "firebase/firestore";
import { useState, useEffect } from 'react';

export default function Register(){
    const [fn, setFN] = useState("");
    const [age, setAge] = useState("");
    const [ava, setAva] = useState(""); //avatar

    //age, fullname, avatar url
    const EditUser = async () => {

            const db = getFirestore();
            // Add a new document with a generated id
            // const docRef = await addDoc(collection(db, "users"), {
            //     fullname: fn,
            //     age: age,
            //     avatar: ava
            // });
            // console.log("Document written with ID: ", docRef.id);
    }

    return(
        <View>
            <TextInput
              value={fn}
              placeholder="fullname"
              onChangeText={(txt)=>setFN(txt)} />

            <TextInput
              value={age}
              placeholder="age"
              onChangeText={(txt)=>setAge(txt)} />

            <TextInput value={ava}
              placeholder="avatar"
              onChangeText={(txt)=>setAva(txt)} />

            <Button title="add"
              onPress={()=>EditUser()} />
        </View>
    );
}
