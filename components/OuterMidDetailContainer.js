import { useNavigation } from '@react-navigation/native'
import { View, Pressable, Image, Text, StyleSheet } from 'react-native'

import { MidDetailContainer } from './MidDetailContainer'

export const OuterMidDetailContainer = ({currMoviesState}) => {
    const navigation = useNavigation()
    return (
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Pressable onPress={() => navigation.navigate('Poster', { uri: currMoviesState.Poster })}>
                <Image style={styles.poster} source={{uri: currMoviesState.Poster}} />    
            </Pressable>
            <View style={{width: '65%'}}>
                <View style={{alignItems: 'center', justifyContent: 'center', marginBottom: 5}}>
                    <Text style={styles.bold}>Actors: </Text>
                    <Text >{currMoviesState.Actors}</Text>                        
                </View>
                <MidDetailContainer
                    nameA='Director'
                    detailA={currMoviesState.Director}
                    nameB='Writers'
                    detailB={currMoviesState.Writer}
                />
                <MidDetailContainer
                    nameA='Language'
                    detailA={currMoviesState.Language}
                    nameB='Country'
                    detailB={currMoviesState.Country}
                />
            </View> 
        </View>
    )
}

const styles = StyleSheet.create({
    poster: {
        height: 170,
        width: 105,
        margin: 5,
        borderWidth: 2,
        borderRadius: 5,
        borderColor: '#000000'
    },
    bold: {
        fontWeight: 'bold'
    }
})