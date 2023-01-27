import { View, Text, Button } from 'react-native'
import  { createNativeStackNavigator } from '@react-navigation/native-stack'
import Ionicons from 'react-native-vector-icons/Ionicons'

import { TestPage } from '../screens/TestPage'
import { Search } from '../screens/Search'

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
        </Stack.Navigator>
    )
}