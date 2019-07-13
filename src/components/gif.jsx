import React, { Component } from 'react';
class Gif extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const src = `https://media2.giphy.com/media/${this.props.id}/200.gif`;
        return (
            <img src={src} alt="" className="gif"/>
        )
    }
}
export default Gif;