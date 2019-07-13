import React, { Component } from 'react';
import SearchBar from './search_bar.jsx';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }
    render() {
        return (
            <div>
                <div className="left-scene">
                    <SearchBar />
                </div>
                <div className="right-scene"></div>
            </div>
        )
    }
}
export default App;