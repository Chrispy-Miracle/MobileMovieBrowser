import { View, Text, Image, StyleSheet } from 'react-native'

export const MovieCardBasic = (props) => {
    return (
        <View>
            <Text>{props.movieData.Title}</Text>
            <Text>{props.movieData.Type}</Text>
            <Text>{props.movieData.Year}</Text>
            <Text>{props.movieData.imdbID}</Text>
            <Image style={styles.poster} source={{uri: props.movieData.Poster}} />
        </View>
    )
}

const styles = StyleSheet.create({
    poster: {
        height: 130,
        width: 85,
        margin: 5,
        borderWidth: 2,
        borderRadius: 5,
        borderColor: '#000000'
    }
})