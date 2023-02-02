import { View, Text, Linking, StyleSheet } from 'react-native'

export const LowerDetailContainer = ({currMoviesState}) => {
    return (
        <View>
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
                        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                            <Text style={{fontWeight: 'bold', paddingLeft: 20}}>Box Office:</Text>
                            <Text> {currMoviesState.BoxOffice}</Text> 
                        </View>                    
                    </View>
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
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