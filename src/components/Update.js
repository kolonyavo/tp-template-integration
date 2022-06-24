import React from 'react'
import axios from 'axios'
import './styles.css';

const App = () => {
    const userToPatch = {
        title: 'foo',
    };

    const handleClick = async () => {
        const response = await axios
            .patch('https://jsonplaceholder.typicode.com/users', userToPatch)
            .catch((error) => console.log('Error: ', error));
        if (response && response.data) {
            console.log(response);
            console.log(response.data);
        }
    };
    return (
        <form>
             <label className='title'>
            Name :
            <input type="text" name="name" className='champ'/>
          </label>
          <button onClick={handleClick}>Update</button>
          <hr/>
          <label className='title'>
            Position :
            <input type="text" name="position" className='champ'/>
          </label>
          <button onClick={handleClick}>Update</button>
          <hr/>
          <label className='title'>
            Office :
            <input type="text" name="office" className='champ'/>
          </label>
          <button onClick={handleClick}>Update</button>
          <hr/>
          <label className='title'>
            Age :
            <input type="text" name="age" className='champ'/>
          </label>
          <button onClick={handleClick}>Update</button>
          <hr/>
          <label className='title'>
            Start Date :
            <input type="text" name="name" className='champ'/>
          </label>
          <button onClick={handleClick}>Update</button>
          <hr/>
          <label className='title'>
            Salary :
            <input type="text" name="name" className='champ'/>
          </label>
          <button onClick={handleClick}>Update</button>
          <hr/>
            <button onClick={handleClick}>Update All</button>
        </form>
    );
};

export default App;