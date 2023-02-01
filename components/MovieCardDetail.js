import { useNavigation } from "@react-navigation/native"
import { useState, useEffect } from "react"
import { View, ScrollView, Button, Text, Image, Linking, StyleSheet, Pressable } from 'react-native'

import { apiCall } from "../apiCall"
import { Poster } from "../screens/Poster"

export const MovieCardDetail = ({route, navigation}) => {
    const [currMoviesState, setCurrMoviesState] = useState({})
    // const navigation = useNavigation()
    const id = route.params.id
    const optional = `?i=${id}`
    
    console.log('optional: ', optional)
    async function getData() {
        try {
            console.log(`Indexing to ${optional}`)
            const data = await apiCall(optional)
            console.log("data in Get Data", data)
            setCurrMoviesState(data)
        } catch {(err) => console.log(err)}
    }

    !currMoviesState.Title && getData()

    return (
        <ScrollView>
            {currMoviesState.Title && <View style={styles.movieCard}>
            <Text style={styles.title}>{currMoviesState.Title}</Text>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <Text style={styles.bold}>{currMoviesState.Type && currMoviesState.Type.toUpperCase()}:</Text>
                <Text> {currMoviesState.Year}  </Text>
                <Text style={styles.bold}>Rated: </Text>
                <Text>{currMoviesState.Rated}   {currMoviesState.Production}</Text>
            </View>
            <View  style={{flexDirection: 'row', justifyContent: 'center'}}>
                <Text style={styles.bold}>Genre: </Text>
                <Text>{currMoviesState.Genre}   </Text>
                <Text style={styles.bold}>{currMoviesState.Runtime}</Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Pressable onPress={() => navigation.navigate('Poster', { uri: currMoviesState.Poster })}>
                    <Image style={styles.poster} source={{uri: currMoviesState.Poster}} />    
                </Pressable>
                
                <View style={{width: '65%'}}>
                    <View style={{alignItems: 'center', justifyContent: 'center', marginBottom: 5}}>
                        <Text style={styles.bold}>Actors: </Text>
                        <Text >{currMoviesState.Actors}</Text>                        
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'flex-start', paddingLeft:5, marginBottom: 5, width: '60%'}}>
                        <View >
                            <Text style={styles.bold}>Director: </Text>
                            <Text style={{paddingLeft:5, marginRight: 5, width: 90}}>{currMoviesState.Director}</Text>
                        </View>
                        <View>
                            <Text style={{fontWeight: 'bold'}}>Writers: </Text>
                            <Text style={{paddingLeft:5, width: 110}}>{currMoviesState.Writer}</Text>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'flex-start', paddingLeft:5}}>
                        <View>
                            <Text style={styles.bold}>Language: </Text>
                            <Text style={{paddingLeft:5, marginRight: 5, width: 90}}>{currMoviesState.Language}</Text>
                        </View>
                        <View>
                            <Text style={styles.bold}>Country: </Text>
                            <Text style={{paddingLeft:5, width: 110 }}>{currMoviesState.Country}</Text>                        
                        </View>                        
                    </View>              
                </View> 
            </View>  
            <Text style={styles.bold}>{currMoviesState.Awards}</Text>
            <Text style={styles.plotText}>{currMoviesState.Plot}</Text>
            <Text style={{color: 'blue', textAlign: 'center', fontSize: 16}} onPress={() => Linking.openURL(currMoviesState.Website)}>{currMoviesState.Website}</Text>
            <View style={{alignItems: 'center'}}>
                {currMoviesState.Ratings && currMoviesState.Ratings.map((item, key) => {
                    return (
                        <View style={{flexDirection: 'row', marginLeft: 20}} key={key}>
                            <Text style={{fontWeight: 'bold'}}>{item.Source}:   </Text>
                            <Text>{item.Value}</Text>
                        </View>)
                })}
                <View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{fontWeight: 'bold'}}>Metascore: </Text>
                        <Text style={{paddingRight:20}}>{currMoviesState.Metascore}</Text>
                        <Text style={{fontWeight: 'bold'}}>imdbRating: </Text>
                        <Text>{currMoviesState.imdbRating}</Text>                    
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                        <Text style={{fontWeight: 'bold', paddingLeft: 20}}>imdbVotes:</Text>
                        <Text> {currMoviesState.imdbVotes}</Text>                            
                    </View>
                </View>
                
            </View>
            <View style={{height: 10}}></View>
            <Button color='#754906' title="Back to Search Results" onPress={() => navigation.goBack()}/>
            <View style={{height: 10}}></View>

            </View>}

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    movieCard: {
        height: '95%',
        alignSelf: 'center',
        width:'95%',
        borderColor: '#976B08',
        borderWidth: 2,
        borderRadius: 10,
        margin: 10,
        padding: 10,
        backgroundColor: '#D6B361',
        shadowColor: 'green',
        shadowOffset: 5
    },
    title: {
        minHeight: 35,
        backgroundColor: '#F1D38D',
        fontSize: 18,
        fontWeight: 'bold',
        padding: 5,
        borderColor: '#AA7B10',
        borderWidth: 2,
        borderRadius: 5,
        textAlign: 'center'
    },
    poster: {
        height: 170,
        width: 105,
        margin: 5,
        borderWidth: 2,
        borderRadius: 5,
        borderColor: '#000000'
    },
    plotText: {
        fontSize: 18,
        backgroundColor: '#F1D38D',
        padding: 6,
        borderRadius: 5,
        margin: 5,
        textAlign: 'center',
        borderColor: '#AA7B10',
        borderWidth: 2,
        borderRadius: 5,
    },
    bold: {
        fontWeight: 'bold'
    }
})