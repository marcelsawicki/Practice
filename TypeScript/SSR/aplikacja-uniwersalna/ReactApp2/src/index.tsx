import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {App} from "./App";

//ReactDOM.render(<App num={1337} />, document.getElementById('root'));

interface MessageProps {
    text: string;
    important: boolean;
  }
   
  function Message({ text, important }: MessageProps) {
    return (
      <div>
        {important ? 'Important message: ' : 'Regular message: '}
        {text}
      </div>
    );
  }
ReactDOM.render(<Message
    text="The form has been submitted!"
    important={false}
  />, document.getElementById('root'));
