import React, { Component } from 'react';
import './Item.css';
class Item extends Component {
    constructor(props){
        super(props);
        this.handleMouseHover = this.handleMouseHover.bind(this);
        this.state = {
            isHovering: false,
            Data: this.props.itemData,
        }
    }

    handleMouseHover() {
        this.setState(this.toggleMouseHover)
    }

    toggleMouseHover(state) {
        return {
            isHovering: !state.isHovering,
        };
    }

render(){
    return(
        <div className = 'Box'>
        <div onMouseEnter = {this.handleMouseHover} onMouseLeave = {this.handleMouseHover} >{this.props.itemData.name}</div>
        {this.state.isHovering && <div className = 'Hover'> {this.state.Data.birth_year} </div>}
        </div>
    )
}
}

export default Item;