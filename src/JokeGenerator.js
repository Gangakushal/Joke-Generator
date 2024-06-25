import React, { useState } from 'react';
import axios from 'axios';

const JokeGenerator = () => {
  const [joke, setJoke] = useState('');

  const fetchJoke = async () => {
    try {
      const response = await axios.get('https://official-joke-api.appspot.com/random_joke');
      setJoke(`${response.data.setup} - ${response.data.punchline}`);
    } catch (error) {
      console.error('Error fetching the joke', error);
    }
  };

  return (
    <div>
      <h1>Joke Generator</h1>
      <button onClick={fetchJoke}>Get a Joke</button>
      {joke && <p>{joke}</p>}
    </div>
  );
};

export default JokeGenerator;
