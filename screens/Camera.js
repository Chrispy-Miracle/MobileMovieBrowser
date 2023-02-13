import { View, Text, Image, Button } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import { useState } from 'react'

export const Camera = () => {
    const [image, setImage] = useState(null)

    const pickImageAsync = async () => {
        let result = await ImagePicker.launchImageLibraryAsync()
        
        console.log(result)
        if (!result.canceled) {
            setImage(result.assets[0].uri)
        }
    }

    const takePhotoAsync = async () => {
        let result = await ImagePicker.launchCameraAsync()
        
        // console.log(result)
        if (!result.canceled) {
            setImage(result.assets[0].uri)
        }
    }

    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Button
                color='#456789'
                title='Pick an image'
                onPress={pickImageAsync}
            />
            <View style={{height: 10}}></View>
            <Image 
                source={image ? { uri: image } : require('../assets/meAtComputer.jpg')}
                style={{height: 300, width: 300}}
            />
            <Text>Or</Text>
            <View style={{height: 10}}></View>
            <Button
                color='#456789'                
                title='Take a Photo'
                onPress={takePhotoAsync}
            />
        </View>
    )
}