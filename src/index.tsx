import * as React from 'react';
import { render } from 'react-dom';


interface Message {
  author: string;
  content: string;
}

type Thread = Message[];

function Test() {
  return (
    <h1> Howdy </h1>
  );
}

render (<Test />, document.getElementById('root'));
