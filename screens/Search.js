import { useState, useRef } from 'react';
import { View, ScrollView, Text, TextInput, Button, StyleSheet, Pressable} from 'react-native'
import Ionicon from 'react-native-vector-icons/Ionicons'

import { apiCall } from '../apiCall';
import { MovieCardBasic } from '../components/MovieCardBasic';

export const Search = ({navigation}) => {
    const [searchInputVal, setSearchInputVal] = useState('')
    const [searchData, setSearchData] = useState([])
    const [page, setPage] = useState(1)
    
    const optional = `?s=${searchInputVal ? searchInputVal : ''}&page=${page}`
   
    const scrollRef = useRef()

    const updateSearchInput = (inputVal) => {
        setSearchInputVal(inputVal)
        
    }

    async function handleSearch() {
        try {
            console.log(`Searching for ${optional}`)
            const data = await apiCall(optional)
            setSearchData(data.Search)
        } catch {(err) => console.log(err)}
    }

    const scrollToTop = () => {
        scrollRef.current?.scrollTo({
            y: 0,
            animated: true,
          });        
    }

    const nextPage = () => {
        setPage(page + 1)
        handleSearch()
        scrollToTop()
    }
    const prevPage = () => {
        setPage(page - 1)
        handleSearch()
        scrollToTop()
    }
    // Potentially redo as a Section List using this:
    // const renderItem = (obj) => <MovieCard {...obj.item}/>

    return (
        <ScrollView ref={scrollRef}>
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
                    navigation={{navigation}}
                />
                ))}
                {/* <SectionList 
                    sections={{
                        title: "Movies",
                        data: {movie}
                    }}
                    renderItem={renderItem}
                /> */}
                <View style={{height: 10}}></View>
                <View style={{flexDirection: 'row'}}>
                    <Button
                        title='Prev Page'
                        color='#552244'
                        onPress={prevPage}
                    />
                    <View style={{width: 10}}></View>
                    <Button
                        title='Next Page'
                        color='#552244'
                        onPress={nextPage}
                    />                    
                </View>
                <View style={{height: 10}}></View>
                <View style={{height: 10}}></View>
                <Button
                    title='Back To Test Page'
                    color='#552244'
                    onPress={() => navigation.navigate('Test Page')}
                />
                <View style={{height: 10}}></View>
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