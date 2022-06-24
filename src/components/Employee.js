import React from 'react';
import App from '../App';

import axios from 'axios';

function retour() {
  return(
    <App/>
  );
}

export default class PersonList extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

  render() {
    return (
      <>
      <ul>
        { this.state.persons.map(person => <li>{person.name}</li>)}
      </ul>
      <button type="submit" onClick={retour}>Go back</button>
      </>
    )
  }
}