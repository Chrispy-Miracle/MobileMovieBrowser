import { View, Text } from 'react-native'
import  { createNativeStackNavigator } from '@react-navigation/native-stack'
import Ionicons from 'react-native-vector-icons/Ionicons'

import { TestPage } from '../screens/TestPage'
import { Search } from '../screens/Search'
import { MovieCardDetail } from '../components/MovieCardDetail'
import { Poster } from '../screens/Poster'
import { MyMap } from '../screens/MyMap'
import { Contacts } from '../screens/Contacts'
import  { Compass } from '../screens/Compass'
import { UpFinder } from '../screens/UpFinder'


const Stack = createNativeStackNavigator()

export const StackNavigator = ({navigation}) => {
    return (
        <Stack.Navigator
            initialRouteName='Test Page'
            screenOptions={{
                    headerTintColor: '#552244',
                    headerStyle: {
                        backgroundColor: 'teal',
                        color: '#114499',
                    }
                }}>
            <Stack.Screen
                name='Test Page'
                component={TestPage}
                options={{
                    headerTitle: ({color}) => 
                    (<View style={{flexDirection: 'row', alignItems:'center'}}>
                        <Ionicons style={{paddingLeft: 20}} name='videocam-sharp' size={40} color={color}/>
                        <Text style={{fontSize: 25, paddingLeft: 20}}>MOVIE BROWSER</Text>
                    </View>
                    ),
                }} 
            />
            <Stack.Screen
                name='Search'
                component={Search}
                options={{
                    headerTitle: (color) => 
                    (<View style={{flexDirection: 'row', alignItems:'center'}}>
                        <Ionicons style={{paddingLeft: 20}} name='search' size={40} color={color}/>
                        <Text style={{fontSize: 25, paddingLeft: 10}}>SEARCH</Text>
                    </View>
                    )
                }}
            />
            <Stack.Screen 
                name='Details'
                component={MovieCardDetail}
            />
            <Stack.Screen 
                name='Poster'
                component={Poster}
            />
            <Stack.Screen 
                name='MyMap'
                component={MyMap}
            />
            <Stack.Screen 
                name='Contacts'
                component={Contacts}
            />
            <Stack.Screen 
                name='Compass'
                component={Compass}
            />
            <Stack.Screen 
                name='UpFinder'
                component={UpFinder}
            />                        
        </Stack.Navigator>
    )
}