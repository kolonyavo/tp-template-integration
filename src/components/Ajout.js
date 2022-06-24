import React from 'react';
import axios from 'axios';

export default class PersonList extends React.Component {
  state = {
    name: '',
  }

  handleChange = event => {
    this.setState({ name: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const user = {
      name: this.state.name
    };

    axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label className='title'>
            Person Name:
            <input type="text" className='champ' name="name" onChange={this.handleChange} />
          </label>
          <hr/>
          <label className='title'>
            Position :
            <input type="text" className='champ' name="position" onChange={this.handleChange} />
          </label>
          <hr/>
          <label className='title'>
            Office :
            <input type="text" className='champ' name="office" onChange={this.handleChange} />
          </label>
          <hr/>
          <label className='title'>
              Age :
            <input type="text" className='champ' name="age" onChange={this.handleChange} />
          </label>
          <hr/>
          <label className='title'>
            Start Date
            <input type="text" className='champ' name="Start date" onChange={this.handleChange} />
          </label>
          <hr/>
          <label className='title'>
            Salary :
            <input type="text" className='champ' name="salary" onChange={this.handleChange} />
          </label>
          <hr/>
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}