import React, { Component } from 'react';
import SearchBar from './search_bar.jsx';
import Gif from "./gif.jsx";
import GifList from "./gif_list.jsx";
import giphy from 'giphy-api';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            gifs: [],
            selectedGifId: "xT9IgDEI1iZyb2wqo8"
        };

        this.search("Homer thinking"); // just to initialize gif lists without searching
    }
    search = (query) => {
        const requestUrl = `https://api.giphy.com/v1/gifs/search?api_key=2x6zGXZ9350VO2vnnXmU34Ey33QpB6oy&q=${query}&limit=10&offset=0&rating=G&lang=fr`
        fetch(requestUrl)
            .then(response => response.json())
            .then((result) => {
                this.setState({gifs: result.data});
            });
    }
    render() {
        return (
            <div>
                <div className="left-scene">
                    <SearchBar searchFunction={this.search}/>
                    <div className="selected-gif">
                        <Gif id={this.state.selectedGifId}/>
                    </div>
                </div>
                <div className="right-scene">
                    <GifList gifs={this.state.gifs}/>
                </div>
            </div>
        )
    }
}
export default App;