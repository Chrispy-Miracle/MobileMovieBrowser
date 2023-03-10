import { View, Text, Image, Button, StyleSheet } from 'react-native'
import { useState, useEffect } from 'react';

// import { dotThenFetch, awaitFetch } from '../apiCallComparison';

import { movie } from '../mockData';


export const TestPage = ({navigation}) => {
    const [fetchedData, setFetchedData] = useState({})
    // useEffect(() => console.log(fetchedData.results[0].name.first))

    // !fetchedData && 
    // console.log("from testpage 13", dotThenFetch())
    // console.log("from testpage 14", awaitFetch())
   
    // async function fetchAndSetData() {
    //     try {
    //         const data = dotThenFetch()
    //         setFetchedData(data)
            
    //     } catch {(err) => console.log(err)}
    // }
    // const logIt = () => {
    //     console.log(fetchedData)
    // }
    // useEffect(() => setFetchedData(dotThenFetch().results))
        


    return (
        <View style={styles.container}>
            {/* <Button 
                title={"Dot Then Fetch"}
                color="#777"
                onPress={fetchAndSetData}
            />
            <Button 
                title={"Log it"}
                color="#777"
                onPress={logIt}
            /> */}
            {/* <Text>{fetchedData}</Text> */}
            <View style={{flexDirection: 'row'}}>
                <Button title="Contacts" color='#552244' onPress={() => navigation.navigate('Contacts')} />
                <View style={{width: 10}} ></View>
                <Button title="MyMap" color='#552244' onPress={() => navigation.navigate('MyMap')} />
                <View style={{width: 10}} ></View>
                <Button title='Search' color='#552244' onPress={() => navigation.navigate('Search')} />
            </View>
            <View style={{flexDirection: 'row', padding: 10}}>
                <Button title="Compass" color='#552244' onPress={() => navigation.navigate('Compass')} />
                <View style={{width: 10}} ></View>
                <Button title="UpFinder" color='#552244' onPress={() => navigation.navigate('UpFinder')} />
                <View style={{width: 10}} ></View>
                <Button title='ExpoVideo' color='#552244' onPress={() => navigation.navigate('ExpoVideo')} />
            </View>
            <View style={{flexDirection: 'row', padding: 10}}>
                <Button title="Camera" color='#552244' onPress={() => navigation.navigate('Camera')} />
                <View style={{width: 10}} ></View>
                <Button title="Redux" color='#552244' onPress={() => navigation.navigate('Redux')} />
                <View style={{width: 10}} ></View>
                <Button title='3' color='#552244' onPress={() => navigation.navigate('Camera')} />
            </View>            
            <Text>Mobile Movie Browser</Text>
            <Text>{movie.Title}</Text>
            <Image style={{height: 385, width: 252}} source={{uri: 'https://upload.wikimedia.org/wikipedia/en/8/87/StarWarsMoviePoster1977.jpg'}} />
        </View> 
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });