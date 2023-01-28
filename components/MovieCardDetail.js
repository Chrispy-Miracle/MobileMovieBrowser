import { useState } from "react"
import { View, ScrollView, Text, Image, Linking, StyleSheet } from 'react-native'

import { movie } from '../mockData'
// import { apiCall } from "../apiCall"
export const MovieCardDetail = () => {
    const [currMoviesState, setCurrMovies] = useState({...movie})

    return (
        <ScrollView style={styles.movieCard}>
            <Text style={styles.title}>{currMoviesState.Title}</Text>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <Text style={styles.bold}>{currMoviesState.Type.toUpperCase()}:</Text>
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
                <Image style={styles.poster} source={{uri: 'https://upload.wikimedia.org/wikipedia/en/8/87/StarWarsMoviePoster1977.jpg'}} />
                <View >
                    <View style={{alignItems: 'center', width: '80%', marginBottom: 5}}>
                        <Text style={styles.bold}>Actors: </Text>
                        <Text>{currMoviesState.Actors}</Text>                        
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'flex-start', paddingLeft:5, marginBottom: 5}}>
                        <View style={{minWidth: '40%'}}>
                            <Text style={styles.bold}>Director: </Text>
                            <Text style={{paddingLeft:5}}>{currMoviesState.Director}</Text>
                        </View>
                        <View>
                            <Text style={styles.bold}>Writer: </Text>
                            <Text style={{paddingLeft:5}}>{currMoviesState.Writer}</Text>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'flex-start', paddingLeft:5}}>
                        <View style={{width: '40%'}}>
                            <Text style={styles.bold}>Language: </Text>
                            <Text style={{paddingLeft:5}}>{currMoviesState.Language}</Text>
                        </View>
                        <View>
                            <Text style={styles.bold}>Country: </Text>
                            <Text style={{paddingLeft:5}}>{currMoviesState.Country}</Text>                        
                        </View>                        
                    </View>              
                </View> 
            </View>  
            <Text style={styles.bold}>{currMoviesState.Awards}</Text>
            <Text style={styles.plotText}>{currMoviesState.Plot}</Text>
            <Text style={{color: 'blue', textAlign: 'center', fontSize: 16}} onPress={() => Linking.openURL(currMoviesState.Website)}>{currMoviesState.Website}</Text>
            <View style={{alignItems: 'center'}}>
                {currMoviesState.Ratings.map((item, key) => {
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
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{fontWeight: 'bold', paddingLeft: 20}}>imdbVotes:</Text>
                        <Text> {currMoviesState.imdbVotes}</Text>                            
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    movieCard: {
        // height: '95%',
        width:'97%',
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
        height: 35,
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
        height: 130,
        width: 85,
        margin: 5,
        borderWidth: 2,
        borderRadius: 5,
        borderColor: '#000000'
    },
    plotText: {
        fontSize: 18,
        backgroundColor: '#F1D38D',
        padding: 10,
        borderRadius: 5,
    },
    bold: {
        fontWeight: 'bold'
    }
})