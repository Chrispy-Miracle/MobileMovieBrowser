import { useState } from 'react'
import { View, Text, Button } from 'react-native'

const UPDATE_USER = 'UPDATE_USER'
const ADD_CONTACT = 'ADD_CONTACT'

const reducer = (state, update) => ({
    ...state,
    ...update
})

const contactReducer = (state, newContact) => ([...state, newContact])

const userReducer = (state, update) => ({...state, ...update})

const mainReducer = (state, action) => {
    switch (action.type) {
        case ADD_CONTACT:
            return {
                ...state,
                contacts: contactReducer(state.contacts, action.payload)
            }
        case UPDATE_USER:
            return {
                ...state,
                user: userReducer(state.user, action.payload)
            }                
    
        default:
            break;
    }
}

class Store {
    constructor(reducer, intitialState) {
        this.reducer = reducer
        this.state = intitialState
    }

    getState() {
        return this.state
    }

    dispatch(update) {
        this.state = this.reducer(this.state, update)
    }
}

    
export const Redux = () => {
    const [storeData, setStoreData] = useState(null)

    let state = {}
    state = reducer(state, {foo: 'foo'})
    state = reducer(state, {bar: 'bar'})
    state = reducer(state, {foo: 'baz'})

    const store = new Store(reducer, {blah: 'blah'})
    
    store.dispatch({foo: 'blam'})
    // console.log(store.getState())

    const DEFAULT_STATE = {user: {name: "chris", number: "9090595"}, contacts: ["hi"]}
    
    const storeTwo = new Store(mainReducer, DEFAULT_STATE)
    !storeData && setStoreData(storeTwo.getState())

    const updateUser = update => ({
        type: UPDATE_USER,
        payload: update
    })

    const addContact = newContact => ({
        type: ADD_CONTACT,
        payload: newContact
    })
    
    const doTwoDispatches = () => {
        storeTwo.dispatch(updateUser({name: "christoph", number: "00000"}))
        storeTwo.dispatch(addContact('chris'))
        setStoreData(storeTwo.getState())
    }

    // doTwoDispatches()

    return (
        <View style={{alignItems: 'center'}}>
            <Text>Redux</Text>
            <Text>{JSON.stringify(state)}</Text>
            <Text>{JSON.stringify(store.getState())}</Text>
            <Button 
                title='Dispatch'
                onPress={doTwoDispatches}
            />
            <Text>Store Two:  {JSON.stringify(storeData)}</Text>
        </View>
    )
}