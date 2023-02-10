import { useEffect, useState } from 'react'
import { View, Text, ImageBackground, Image, Button, StyleSheet } from 'react-native'
import { Magnetometer } from 'expo-sensors'


export const Compass = () => {
    const [degrees, setDegrees] = useState('24.092945197971964deg')
    const [{ x, y, z }, setData] = useState({
        x: 0,
        y: 0,
        z: 0
    })
    const [subscription, setSubscription] = useState(null)

    const subscribe = () => {
        Magnetometer.setUpdateInterval(2000)
        setSubscription(
            Magnetometer.addListener(result => {
                setData(result)
                
            })
        )

    }
    
    const unsubscribe = () => {
        subscribe && subscription.remove()
        setSubscription(null)
    }

    useEffect(() => {
        subscribe()
        return () => unsubscribe()
    }, [])


    // While north, x ~15, y ~ 20
    //east, x~-15, y~3
    // south: x~-3, y-27
    //west: x~33, y~-8


    useEffect(() => {
        // console.log(`${Math.atan2(y, x) * ( 180 / Math.PI)}deg`)
        setDegrees(`${Math.atan2(y, x) * ( 180 / Math.PI) - 70}deg`)
        // let theta
        // theta = Math.atan(-x/y)
        // console.log(Math.atan(-x/y), "    ", Math.atan2(y, x))
        // if (-x > 0 && y > 0) {
        //     // setDegrees(`${theta}deg`)
        //     setDegrees(`${Math.atan2(y, x) * ( 180 / Math.PI)}deg`)
        // } else if (y > 0) {
        //     setDegrees(`${Math.atan2(y, x) * ( 180 / Math.PI) + Math.PI}deg`)
        //     // setDegrees(`${theta += Math.PI}deg`)
        // } else {
        //     // setDegrees(`${theta += Math.PI * 2}deg`)
        //     setDegrees(`${Math.atan2(y, x) * ( 180 / Math.PI) + (Math.PI * 2)}deg`)
        // }

        console.log(`x: ${x}  y: ${y}  deg: ${degrees}`)
    }, [x, y])

    return (
        <View style={{alignItems: 'center'}}>
            <Text style={{fontSize: 22}}>Compass</Text>
            <Button 
                title="Toggle Magnetometer Subscription"
                onPress={subscription ? unsubscribe : subscribe }
            />
            <Text>x: {x}</Text>
            <Text>y: {y}</Text>
            <Text>z: {z}</Text>
            <ImageBackground 
                source={require('../assets/compass-background.png')}
                style={styles.background}
            >
                <Image 
                    source={require('../assets/compass-needle.png')}
                    style={[
                        styles.needle,
                        {
                            transform: [{rotate: degrees}]
                        }
                    ]}
                />
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        marginTop: '25%',
        justifyContent: 'center',
        alignItems: 'center',
        height: 579 * .5,
        width: 600 * .5,
    },
    needle: {
        height: 435 * .6,
        width: 54 * .6,
        marginBottom: 4,
        marginLeft: 9
    }
})