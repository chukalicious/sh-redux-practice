import axios from 'axios'

// We create a variable for our action type to prevent errors
// and to make errors easier to handle if we do run into them.
const GET_DATA = 'GET_DATA'

// We use dispatch so our function knowns to wait for the api
export const getData = () => dispatch => {
    axios.get("https://dog.ceo/api/breeds/image/random/10")
        .then(res => {
            const data = res.data.message
            dispatch({ type: GET_DATA, data })
        })
        .catch(err => {
            console.log(err)
        })
}