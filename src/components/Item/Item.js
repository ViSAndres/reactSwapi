import React, { Component } from 'react';

class Item extends Component {
    constructor(props){
        super(props);
        this.state = {
            Data: this.props.itemData,
        }
    }
render(){
    return(
        <div className = 'Box'>
        <p1>{this.props.itemData.name}</p1>
        </div>
    )
}
}