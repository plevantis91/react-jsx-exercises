import logo from './logo.svg';
import './App.css';
import React from 'react'
import FirstComponent from './FirstComponent'
import NamedComponent from './NamedComponent'
import Tweet from './Tweet'
import Person from './Person'

function App() {
  return (
    <div>
      <h1>First Part</h1>
      <FirstComponent />
      <NamedComponent name="Peter" />
      <h1>Second Part</h1>
      <Tweet username="LinkZelda" 
        name="Link Zelda" 
        date="July 22, 2024" 
        msg="I need to fight Gannondorf for Zelda." 
      />

      <Tweet username="MessiGoat" 
        name="Lionel Messi" 
        date="June 29, 2024" 
        msg="Greatest Footballer Ever!" 
      />

      <Tweet username="BobRoss" 
        name="Robert Ross" 
        date="Aug 2, 2021" 
        msg="I love to paint trees !!" 
      />
      <h1>Third Part</h1>
      <Person 
                name="Alexander" 
                age={25} 
                hobbies={['Reading', 'Hiking', 'Coding']} 
            />
            <Person 
                name="Chris" 
                age={17} 
                hobbies={['Gaming', 'Skateboarding', 'Movies']} 
            />
            <Person 
                name="Elizabeth" 
                age={30} 
                hobbies={['Cooking', 'Traveling', 'Photography']} 
            />
    </div>
  );
}

export default App;
