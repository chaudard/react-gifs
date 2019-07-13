import React, { Component } from 'react';
class Gif extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    handleClick = (event) => {
        this.props.selectGifFunction(this.props.id);
    }
    render() {
        const src = `https://media2.giphy.com/media/${this.props.id}/200.gif`;
        return (
            <img src={src} alt="" className="gif" onClick={this.handleClick}/>
        )
    }
}
export default Gif;