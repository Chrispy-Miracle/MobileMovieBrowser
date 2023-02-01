import { useState, useEffect } from 'react';
import { View, ScrollView, Text, TextInput, Button, StyleSheet, Pressable} from 'react-native'
import Ionicon from 'react-native-vector-icons/Ionicons'

import { MovieCardDetail } from '../components/MovieCardDetail';
import { apiCall } from '../apiCall';
import { MovieCardBasic } from '../components/MovieCardBasic';

export const Search = ({navigation}) => {
    const [searchInputVal, setSearchInputVal] = useState('')
    const [searchData, setSearchData] = useState([])
    
    const optional = `?s=${searchInputVal ? searchInputVal : ''}&type=movie`
   
    const updateSearchInput = (inputVal) => {
        setSearchInputVal(inputVal)
    }

    async function handleSearch() {
        try {
            console.log(`Searching for ${searchInputVal}`)
            const data = await apiCall(optional)
            setSearchData(data.Search)
            // console.log("just after set ", data.Search)
        } catch {(err) => console.log(err)}
    }
    // useEffect(() => console.log("useEffect ", searchData ? searchData[0] : "none"), [searchData])

    // const renderItem = (obj) => <MovieCard {...obj.item}/>

    return (
        <ScrollView>
            <View style={{alignItems: 'center'}}>
                <Text style={{fontSize: 22}}>Search for Movies:</Text>                
                <View style={{flexDirection: 'row'}}>
                    <TextInput style={styles.textInput} placeholder='What do you want to watch?' onChangeText={updateSearchInput}></TextInput>
                    <Pressable style={styles.iconBox} onPress={handleSearch}>
                        <Ionicon name='search-sharp' size={30}/>
                    </Pressable>
                </View> 
            {searchData && searchData.map((item, key) => (
                <MovieCardBasic
                    key={key}
                    movieData={item}
                    // onPress={() => navigation.navigate('Details')}
                    navigation={{navigation}}
                />
            ))}
            {/* <MovieCardBasic movieData={searchData[0] ? searchData[0] : []} /> */}
            {/* <Text>{searchData[0].Title}</Text> */}
 
            {/* <Text>{searchData.json()}</Text>  */}
            {/* <SectionList 
                sections={{
                    title: "Movies",
                    data: {movie}
                }}
                renderItem={renderItem}
            />         */}
            {/* <MovieCardDetail navigation={navigation}/> */}
            <View style={{height: 10}}></View>
            <Button
                title='Back To Test Page'
                color='#552244'
                onPress={() => navigation.navigate('Test Page')}
            />
            <View style={{height: 10}}></View>
            {/* <Button
                title='Movie Details'
                color='#552244'
                onPress={() => navigation.navigate('Details')}
            /> */}
            </View>
        </ScrollView>

    )
}

const styles = StyleSheet.create({
    textInput: {
        fontSize: 18,
        height:30,
        width: 270,
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: '#dddddd',
        padding: 5,
        textAlign: 'center'
    },
    iconBox: {
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: '#bbbbbb', 
        width: 30, 
        height: 30,
        borderWidth: 1,
        borderColor: '#777777',
        borderRadius: 5,
        shadowOffset: 3,
        shadowColor: '#aaaaaa',
        marginLeft: 3
    }
})