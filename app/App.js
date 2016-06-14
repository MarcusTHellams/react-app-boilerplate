import React, { Component } from 'react'; 
import {render} from 'react-dom';

class Hello extends Component {
  render(){
  	var place = 'World';
    return (
      <h1>Hello {place}</h1>
    );
  }
}


class GroceryList extends Component {
  render(){
    return (
      <ul>
      <ListItem quantity="1"> Bread</ListItem>
      <ListItem quantity="6"> Eggs</ListItem>
      <ListItem quantity="2"> Milk</ListItem>
      </ul>
    );
  }
}

class ListItem extends Component {
  render(){
    return (
     <li>
		{this.props.quantity} x {this.props.children}
     </li>
    );
  }
}


render(<GroceryList />, document.getElementById('root'));
