export const dotThenFetch = () => {
    fetch('http://randomuser.me/api/?results=1&nat=us')
        .then(response => response.json())
        .then(result => result)
        .catch(err => console.error(err))
}


export async function awaitFetch() {
    try {
        const response = await fetch('http://randomuser.me/api/?results=1&nat=us')
        const result = await response.json()
        return result        
    } catch (err) {
        console.error(err)
    }

}