import { View, Text } from 'react-native'
import { useState, useEffect } from 'react';
import * as ExpoContacts from 'expo-contacts';

export const Contacts = () => {
    const [tenContacts, setTenContacts] = useState([])
    const [showContacts, setShowContacts] = useState(false)

    useEffect(() => {
        (async () => {
          const { status } = await ExpoContacts.requestPermissionsAsync();
          if (status === 'granted') {
            const { data } = await ExpoContacts.getContactsAsync({
              fields: [ExpoContacts.Fields.FirstName, ExpoContacts.Fields.PhoneNumbers],
            });
      
            if (data.length > 0) {
            //   const contact = await data[320];
            //   console.log('number of contacts: ', data.length)
              let randNum = Math.floor(Math.random() * data.length - 12)
              const randomContacts = []
              for (let i = randNum; i < randNum + 10; i++) {
                // data[i].firstName.length && 
                randomContacts.push(`${data[i].firstName} ${data[i].lastName ? data[i].lastName : ""}:  ${data[i].phoneNumbers[0].number}`)
                // console.log(data[i].name)
              }
              // console.log("in UseEfffect", randomContacts)
              setTenContacts(randomContacts)
              // console.log("after set", randomContacts)
              setShowContacts(true)
            }
          }
          
        })();
        
      }, []);
      
      // tenContacts.map((item, key) => console.log(key, item))
      // useEffect(() => setShowContacts(true), [tenContacts])
      // console.log(typeof(tenContacts[0]))
      
     return (
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 22, fontWeight: 'bold', padding: 10}}>10 random Contacts</Text>
            <View>
                {tenContacts.map((item, key) => {
                  return (
                    <Text style={{fontSize: 20, padding: 10}} key={key}>{item}</Text>
                  )
                })}                
            </View> 
        </View>
     )
}