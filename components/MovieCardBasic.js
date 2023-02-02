import { useNavigation } from '@react-navigation/native'
import { View, Text, Image, StyleSheet, Pressable } from 'react-native'

export const MovieCardBasic = (props) => {
    const navigation = useNavigation();
    
    return (
        <Pressable 
            style={styles.movieCardBasic}
            onPress={()=> navigation.navigate('Details', { id: props.movieData.imdbID})}
        >
            <View style={{flexDirection: 'row'}}>
                <Image style={styles.poster} source={{uri: props.movieData.Poster}} />
                <View style={{alignItems: 'center'}}>
                    <Text style={styles.title}>{props.movieData.Title}</Text>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Text style={{fontWeight: 'bold'}}>{props.movieData.Type}:  </Text>
                        <Text style={{fontSize: 20}}>{props.movieData.Year}</Text>
                    </View>
                    <View style={{flexDirection: 'row', marginTop: 20}}>
                        <Text style={{fontWeight: 'bold'}}>imdbID:  </Text>
                        <Text>{props.movieData.imdbID}</Text>
                    </View>
                </View>
            </View>   
        </Pressable>
    )
}

const styles = StyleSheet.create({
    movieCardBasic: {
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        borderColor: '#000',
        borderWidth: 2,
        borderRadius: 10,
        width: '95%',
        backgroundColor: '#D6B361',
        padding: 5
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        width: 200,
        marginBottom:15,
        textAlign: 'center'
    },
    poster: {
        height: 170,
        width: 120,
        margin: 5,
        borderWidth: 2,
        borderRadius: 5,
        borderColor: '#000000'
    }
})