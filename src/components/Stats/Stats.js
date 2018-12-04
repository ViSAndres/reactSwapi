import React, { Component } from 'react';
import './Stats.css';
import './components/Item'
const axios = require('axios');



class Stats extends Component {
    constructor() {
      super();
      this.state = {
        property:'people',
        data:null,
        page: 1,
      };
    }
    
    componentDidMount() {
      axios.get('https://swapi.co/api/people/')
      .then(raw => {
        const parsedData = raw.data;
        this.setState({data: parsedData}); 
        console.log(this.state.data)
      })
      .catch(function (error) {
        console.log(error);
      });  
    }


    loadData(){
      let data = this.state.data
      if(data){
      data = data.results;
      console.log('load')

      console.log(data)

      return data.map(x => {
        return()
      })
    }
  }

  changePage(page){
    axios.get('https://swapi.co/api/'+this.state.property+'?page='+page)
    .then(raw => {
      const parsedData = raw.data;
      this.setState({data: parsedData}); 
      console.log(this.state.data)
    })
    .catch(function (error) {
      console.log(error);
    }); 
  }


  changeProperty(property){
    this.setState({property: property});
    axios.get('https://swapi.co/api/'+property)
    .then(raw => {
      const parsedData = raw.data;
      this.setState({data: parsedData}); 
      console.log(this.state.data)
    })
    .catch(function (error) {
      console.log(error);
    }); 
    
  }

    render() {
      return (
        <div className = 'parent'> 
        <div className = 'sw'>
        
        <button onClick = { () => this.changeProperty('people')}>People</button>
        <button onClick = { () => this.changeProperty('planets')}>Planets</button>
        <button onClick = { () => this.changeProperty('starships')}>Starships</button>
        </div>
        <div className= 'body'>
        {this.loadData()}
        </div>
        <div className = 'numbers'>
        <button onClick = { () => this.changePage('1')}> 1 </button>
        <button onClick = { () => this.changePage('2')}> 2 </button>
        <button onClick = { () => this.changePage('3')}> 3 </button>
        <button onClick = { () => this.changePage('4')}> 4 </button>
        <button onClick = { () => this.changePage('5')}> 5 </button>
        <button onClick = { () => this.changePage('6')}> 6 </button>
        <button onClick = { () => this.changePage('7')}> 7 </button>
        <button onClick = { () => this.changePage('8')}> 8 </button>
        <button onClick = { () => this.changePage('9')}> 9 </button>
        </div>
        </div>
      );
    }
    }
    
export default Stats;