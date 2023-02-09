import { useState, useRef } from 'react';
import { View, ScrollView, Text, TextInput, Button, StyleSheet, Pressable} from 'react-native'
import Ionicon from 'react-native-vector-icons/Ionicons'

import { apiCall } from '../apiCall';
import { MovieCardBasic } from '../components/MovieCardBasic';
import { Selector } from '../components/Selector';

export const Search = ({navigation}) => {
    const [searchInputVal, setSearchInputVal] = useState('')
    const [searchData, setSearchData] = useState([])
    const [page, setPage] = useState(1)
    const [optionToggle, setOptionToggle] = useState(false)
    const [mediaType, setMediaType] = useState('')
    const [year, setYear] = useState('')
    
    const optional = `?s=${searchInputVal ? searchInputVal : ''}&page=${page}${mediaType}${year}`
   
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
    const typeOfMedia = ["Movie", "Series", "Episode", "Game", "All Media"]
    const updateMediaType = (media) => {
        console.log("mediaChange:", media)
        media === "All Media" ? setMediaType("") : setMediaType(`&type=${media.toLowerCase()}`)
        console.log("mediaType:", mediaType)
    }
    const years = () => {
        var max = new Date().getFullYear()
        var min = max - 131
        var years = ['All Years']
      
        for (var i = max; i >= min; i--) {
          years.push(i .toString())
        }
        return years
    }
    const updateYear = (yearInput) => {
        yearInput === "All Years" ? setYear('') : setYear(`&y=${yearInput}`)
    }

    return (
        <ScrollView ref={scrollRef}>
            <View style={{alignItems: 'center'}}>
                <Button 
                    title={optionToggle ? "Hide Options" : "More Options"}
                    color="#777"
                    onPress={() => setOptionToggle(!optionToggle)}
                />
                {optionToggle && 
                <View style={{flexDirection: 'row', borderWidth: 1, borderColor: '#555'}}>
                    <Selector data={typeOfMedia} name='Media Type' setFilter={updateMediaType} />
                    <Selector data={years()} name='Year' setFilter={updateYear} />
                </View>}
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
                {searchData && 
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
                </View>}
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