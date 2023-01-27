import { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Pressable, SectionList } from 'react-native'
import Ionicon from 'react-native-vector-icons/Ionicons'
import { MovieCard } from '../components/MovieCard';

import { movie } from '../mockData';

export const Search = () => {
    const [searchInputVal, setSearchInputVal] = useState('')

    const updateSearchInput = (inputVal) => {
        setSearchInputVal(inputVal)
    }

    const handleSearch = () => {
        console.log(`Searching for ${searchInputVal}`)
    }

    const renderItem = (obj) => <MovieCard {...obj.item}/>

    return (
        <View style={{alignItems: 'center'}}>
            <Text style={{fontSize: 25}}>Search for Movies:</Text>
            <View style={{flexDirection: 'row'}}>
                <TextInput style={styles.textInput} placeholder='What do you want to watch?' onChangeText={updateSearchInput}></TextInput>
                <Pressable style={styles.iconBox} onPress={handleSearch}>
                    <Ionicon name='search-sharp' size={30}/>
                </Pressable>
            </View>   
            {/* <SectionList 
                sections={{
                    title: "Movies",
                    data: {movie}
                }}
                renderItem={renderItem}
            />         */}
            <MovieCard />
        </View>

    )
}

const styles = StyleSheet.create({
    textInput: {
        fontSize: 20,
        height:35,
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
        width: 35, 
        height: 35,
        borderWidth: 1,
        borderColor: '#777777',
        borderRadius: 5,
        shadowOffset: 3,
        shadowColor: '#aaaaaa',
        marginLeft: 3
    }
})