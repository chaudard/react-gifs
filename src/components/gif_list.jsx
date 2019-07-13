import React, { Component } from 'react';
import Gif from './gif.jsx';
class GifList extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return this.props.gifs.map(gif => { return <Gif id={gif.id} /> });        
    }
}
export default GifList;