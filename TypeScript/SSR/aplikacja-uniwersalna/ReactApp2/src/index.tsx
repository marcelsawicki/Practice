import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {App} from "./App";
import { ArrayView } from "./components/ArrayView" 
import { ClickableItem } from "./components/ClickableItem" 
//ReactDOM.render(<App num={1337} />, document.getElementById('root'));

let ClicakableItemArray: ClickableItem[] = [
  {id: 1, displayName: "Pierwszy element"},
  {id: 2, displayName: "Drugi element"},
  {id: 3, displayName: "Trzeci Element"},
]
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
ReactDOM.render(
  <ArrayView title = "Wybierz opcję: " items={ClicakableItemArray}/>, document.getElementById('root'));
