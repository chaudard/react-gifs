import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {colored: false};
    }
    handleChange = (event) => {
        this.props.searchFunction(event.target.value);
    }
    handleMouseOver = (event) => {
        this.setState({colored: true});
    }
    handleMouseOut = (event) => {
        this.setState({colored: false});
    }
    inputClasses() {
        let result = "form-control form-search";
        if (this.state.colored) {
            result += " colored";
        } 
        return result;
    }
    render() {
        return (
            <input type="text" className={this.inputClasses()} onChange={this.handleChange} onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}/>
        )
    }
}
export default SearchBar;