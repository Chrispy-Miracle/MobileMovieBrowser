import { useState } from "react"
import { View, ScrollView, Text, Image, Linking, StyleSheet } from 'react-native'

import { movie } from '../mockData'
export const MovieCard = () => {
    const [currMoviesState, setCurrMovies] = useState({...movie})

    return (
        <ScrollView style={styles.movieCard}>
            <Text style={styles.title}>{currMoviesState.Title}</Text>   
            <View style={{flexDirection: 'row'}}>
                <Image style={styles.poster} source={{uri: 'https://upload.wikimedia.org/wikipedia/en/8/87/StarWarsMoviePoster1977.jpg'}} />
                <View style={{width: '100%'}}>
                    <View style={{flexDirection: 'row'}}>
                        <Text>{currMoviesState.Type.toUpperCase()}: {currMoviesState.Year}  Rated: {currMoviesState.Rated}   {currMoviesState.Runtime}</Text>
                    </View>
                    
                    <Text>Genre: {currMoviesState.Genre}</Text>
                    {/* <Text>Released {currMoviesState.Released}</Text> */}
                    <Text>Director: {currMoviesState.Director}</Text>
                    <Text>Writer: {currMoviesState.Writer}</Text>
                    <Text>Actors: {currMoviesState.Actors}</Text>
                    <Text>Production: {currMoviesState.Production}</Text>
                </View> 
            </View>  
                    
                    
                    <Text>Plot: {currMoviesState.Plot}</Text>
                    <Text>Language: {currMoviesState.Language}</Text>
                    <Text>Country: {currMoviesState.Country}</Text>
                    <Text>Awards: {currMoviesState.Awards}</Text>
                    <View style={{alignItems: 'center'}}>
                        <Text style={{fontWeight: 'bold'}}>Ratings:</Text>
                        {currMoviesState.Ratings.map((item) => {
                            return (
                                <View style={{flexDirection: 'row', marginLeft: 20}}>
                                    <Text>{item.Source}:   </Text>
                                    <Text>{item.Value}</Text>
                                </View>)
                        })}
                    </View>
                    
                    
                    
                    {/* <Text>DVD: {currMoviesState.DVD}</Text> */}
                    {/* <Text>BoxOffice: {currMoviesState.BoxOffice}</Text> */}
                    <Text style={{color: 'blue', textAlign: 'center'}} onPress={() => Linking.openURL(currMoviesState.Website)}>{currMoviesState.Website}</Text>
                    <View style={{alignItems: 'center'}}>
                        <Text>Metascore: {currMoviesState.Metascore}</Text>
                        <Text>imdbRating: {currMoviesState.imdbRating}</Text>
                        <Text>imdbVotes: {currMoviesState.imdbVotes}</Text>
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
        borderRadius: 5
    },
    poster: {
        height: 140,
        width: 95,
        margin: 5,
        borderWidth: 2,
        borderRadius: 5,
        borderColor: '#000000'
    }
})