import { View, Text, Image, Button, StyleSheet } from 'react-native'

import { movie } from '../mockData';

export const TestPage = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Button title='Search' color='#552244' onPress={() => navigation.navigate('Search')} />
            <Text>Mobile Movie Browser</Text>
            <Text>{movie.Title}</Text>
            <Image style={{height: 385, width: 252}} source={{uri: 'https://upload.wikimedia.org/wikipedia/en/8/87/StarWarsMoviePoster1977.jpg'}} />
        </View> 
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });