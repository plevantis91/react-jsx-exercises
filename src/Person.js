import React from 'react';

function Person({name,age, hobbies}){
    const displayName = name.length > 8 
    ? name.slice(0,6)
    : name;

    const voteMsg = age >= 18
    ? "Go Vote!" 
    : "Go Study!";

    const hobbiesList = hobbies
    .map(hobby=> 
    <li>{hobby}</li>);

    return (
        <div>
            <p>Learn some information about this person</p>
            <ul>
                <li>
                   <ul> Name: {displayName} </ul> 
                </li>
                <li>
                    <ul> Age: {age} </ul>
                </li>
                <li>
                    <ul>Hobbies:{hobbiesList} </ul>
                </li>
            </ul>
            <h3>{voteMsg}</h3>

        </div>
    )
}

export default Person;