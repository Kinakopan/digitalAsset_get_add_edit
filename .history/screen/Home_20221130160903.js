import { Text, View, Button, Image, ScrollView } from 'react-native';
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { useState } from 'react';

//READ ALL, CREATE NEW USER, DELETE USER, UPDATE USER, READ A SINGLE USER
export default function Home({navigation}) {
    const [users, setUsers] = useState([]);

    const GetData = async ()=> {

        const db = getFirestore();

        //dosomething
        const querySnapshot = await getDocs(collection(db, "users"));

        const dbusers = [];
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            dbusers.push({
                ...doc.data(),
                id:doc.id
            });
        });
        setUsers([
            ...dbusers
        ]);
    }

    return (
        <View>
            <Button title='GetData' onPress={() => GetData()} />
            <Button title='Add User' onPress={() => navigation.navigate()} />
                <View>
                {users.map(o=>
                    <View key={o.id}>
                        <Image
                            source={{uri:o.avatar}}
                            style={{width:100, height: 100}} />
                        <Text>{o.id} - {o.fullname}</Text>
                    </View>
                    )}
                </View>
        </View>
    );
}
