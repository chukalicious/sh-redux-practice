import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { getData } from './actions'
import Card from './components/card'

function App(props) {
    const { apiData, getData } = props

    // Grabbing API data
    // This data will reside within apiData
    // This is due to the action being called within our reducer
    useEffect(() => {
        getData()
    }, [])

    return (
        <div className="App">
            {/* Mapping over our API data */}
            {apiData ? apiData.map(image => (
                <Card source={image} />
            )) : ''}
        </div>
    );
}

// Setting up state as props
const mapStateToProps = state => {
    return {
        apiData: state.apiData
    }
}

// MapStateToProps gives our component the state we would like to use as props
// The object as the second parameter is our MapDispatchToProps
// MapDispatchToProps gives our component the actions we would like to use as props
export default connect(mapStateToProps, { getData: getData })(App);
