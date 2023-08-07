
import React, { useEffect, useState } from 'react'
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';
import "./Design.css"
// import index from "./index";
import { people } from './index';
import { getImageUrl } from './utils';

function DesignClock({time}) {

    // const current = new Date();
    // const datetime = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;


    const [value, setValue] = useState(new Date());
    const [interval, setInterval] = useState();

    const chemists = people.filter(person =>
        person.profession === 'chemist'
    );
    const everyoneElse = people.filter(person =>
        person.profession !== 'chemist'
    );
// const datetime = Clock { datetime };

    useEffect(() => {
        const interval = setInterval(() => setValue(new Date()), 1000);
    });


    return (

        <>
        <div className='m-container'>
            <div className='clock-container'> <h1>Current time:</h1>
                <Clock value={value} />
            
                <h3> date:{time}</h3>
                </div>

            <div className='scientists-container'>
                
                <h2>Chemists</h2>
                <ul>
                    {chemists.map(person =>
                        <li key={person.id}>
                            <img className='sc'
                                src={getImageUrl(person)}
                                alt={person.name}
                            />
                            <p>
                                <b>{person.name}:</b>
                                {' ' + person.profession + ' '}
                                known for {person.accomplishment}
                            </p>
                        </li>
                    )}
                </ul>
            </div>
            <div className='everyone-container'>
                <h2 >Everyone Else</h2>
                <ul>
                    {everyoneElse.map(person =>
                        <li key={person.id}>
                            <img className='sc'
                                src={getImageUrl(person)}
                                alt={person.name}
                            />
                            <p>
                                <b>{person.name}:</b>
                                {' ' + person.profession + ' '}
                                known for {person.accomplishment}
                            </p>
                        </li>
                    )}
                </ul>
            </div>
            </div >
        </>
 
  )
}

export default DesignClock;


