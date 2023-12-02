import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <div>Hello me ni Zahara nampenda Ibrahim</div>
      <button onClick={() => console.log('Hi there')}> Press Me</button>
      <Link to='/counter'>counter</Link>
    </div>
  );
}

export default Home;
