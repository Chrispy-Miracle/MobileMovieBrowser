import { View, Text, Button } from 'react-native'
import { Video, VideoNaturalSize, AVPlaybackStatus } from 'expo-av'
import { useRef, useState } from 'react'


export const ExpoVideo = () => {
    const video = useRef(null)
    const [status, setStatus] = useState({})
    return (
        <View style={{flex: 1, alignItems: 'center'}}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Expo Video</Text>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Video
                    ref={video}
                    source={{
                        uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'
                    }}
                    style={{height: 400, width: 350, alignSelf: 'center'}}
                    shouldPlay
                    resizeMode='contain'
                    useNativeControls
                    onPlaybackStatusUpdate={status => {
                        status.didJustFinish && video.current.stopAsync() && video.current.dismissFullscreenPlayer()
                    }}
                /> 
                <View style={{height: 10}}></View> 
                <Button 
                    title='fullscreen'
                    onPress={() => {video.current.presentFullscreenPlayer()}}
                />              
            </View>

        </View>
    )
}