import { View, Text } from 'react-native'

export const MidDetailContainer = (props) => {
    return (
        <View style={{flexDirection: 'row', justifyContent: 'flex-start', paddingLeft:5, marginBottom: 5, width: '60%'}}>
            <View >
                <Text style={{fontWeight: 'bold'}}>{props.nameA}: </Text>
                <Text style={{paddingLeft:5, marginRight: 5, width: 90}}>{props.detailA}</Text>
            </View>
            <View>
                <Text style={{fontWeight: 'bold'}}>{props.nameB}: </Text>
                <Text style={{paddingLeft:5, width: 110}}>{props.detailB}</Text>
            </View>
        </View>
    )
}