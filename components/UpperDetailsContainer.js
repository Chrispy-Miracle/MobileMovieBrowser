import { View, Text, StyleSheet } from "react-native"

export const UpperDetailsContainer = ({currMoviesState})=> {
    return (
        <View>
            <Text style={styles.title}>{currMoviesState.Title}</Text>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <Text style={styles.bold}>{currMoviesState.Type && currMoviesState.Type.toUpperCase()}:</Text>
                <Text> {currMoviesState.Year}  </Text>
                <Text style={styles.bold}>Rated: </Text>
                <Text>{currMoviesState.Rated}   {currMoviesState.Production}</Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <Text style={styles.bold}>Genre: </Text>
                <Text>{currMoviesState.Genre}   </Text>
                <Text style={styles.bold}>{currMoviesState.Runtime}</Text>
            </View>  
        </View>
    )
}

const styles = StyleSheet.create({
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
    bold: {
        fontWeight: 'bold'
    }
})