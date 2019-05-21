import React, { Component } from 'react';

class Search extends Component {
    constructor() {
        super();
        this.state = {
            isLoaded: true,
            city: '',
            apiURL: 'api.openweathermap.org/data/2.5/weather?q=',
            apiKey: '403d1f0cd425b90ae962faf173fa03f2',
            searchText: '',
            apiDisplay: []
        }
    }

    componentDidMount() {
        fetch(`${this.state.apiUrl}london`)
            .then(data => console.log(data.Tawarano))
                
    }

    searchHandler = (event) => {
        this.setState({
            searchText: event.target.value 
        })
        
    }

    render() {
        let { isLoaded } = this.state;

        if (!isLoaded) {
            return <div>Loading...</div>
        } else {
            return (
                <div className="App">
                    Data has been loaded
                </div>
            )
        }

        return (
            <div>
                <input 
                    type="text" 
                    placeholder="city"
                    name="searchText"
                    value={this.state.searchText}
                    onChange={this.searchHandler}
                />
                <br/>
                <div>
                    Weather
                </div>
                <div>{this.state.apiDisplay}</div>
            </div>
        )
    }
}


export default Search;