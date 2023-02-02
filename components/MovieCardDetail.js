import { useState} from "react"
import { View, ScrollView, Button, StyleSheet } from 'react-native'

import { apiCall } from "../apiCall"
import { OuterMidDetailContainer } from "./OuterMidDetailContainer"
import { UpperDetailsContainer } from './UpperDetailsContainer'
import { LowerDetailContainer } from "./LowerDetailContainer"

export const MovieCardDetail = ({route, navigation}) => {
    const [currMoviesState, setCurrMoviesState] = useState({})

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
            {currMoviesState.Title && 
            <View style={styles.movieCard}>
                <UpperDetailsContainer currMoviesState={currMoviesState} />
                <OuterMidDetailContainer currMoviesState={currMoviesState} />
                <LowerDetailContainer currMoviesState={currMoviesState} />
                <View style={{height: 10}}></View>
                <Button color='#754906' title=" Go Back" onPress={() => navigation.goBack()}/>
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
})