import * as React from 'react';
import {
  Dispatch,
  SetStateAction,
  useState,
  ChangeEvent,
} from 'react';
import type { Thread } from './types';

/*type HTMLChangeEventElement =
    HTMLInputElement
  | HTMLSelectElement
  | HTMLTextAreaElement;

// higher order component. used for any component with state
// where we update the components state every time it is changed.
  function StatefulInput<HTMLType extends HTMLChangeEventElement> (
  updateState : Dispatch<SetStateAction<string>>,
  element : HTMLType
) {

  function handleChange (e : ChangeEvent<HTMLType>) {
    updateState(e.target.value);
  }

  element.onchange = handleChange;
  } */

interface InputContainerProps {
  currentThread : number | null;
  newThread : Dispatch<SetStateAction<number | null>>;
  site : Thread[];
  updateSite : Dispatch<SetStateAction<Thread[]>>;
}
export function InputContainer(props : InputContainerProps) : JSX.Element {

  const [messageInput, setMessageInput] =
    useState<string>('Enter your message here.');
  const [nameInput, setNameInput] = useState<string>('Username');

  function handleMessageChange (e : ChangeEvent<HTMLTextAreaElement>) {
    setMessageInput(e.target.value);
  }

  function handleNameChange (e : ChangeEvent<HTMLInputElement>) {
    setNameInput(e.target.value);
  }

  function handleSubmit () {
    const threadCopy = {
      title : props.site[props.currentThread!].title,
      replies : [...props.site[props.currentThread!].replies]
    };
    const siteCopy = [...props.site];

    const newMessage = {
      author : nameInput,
      content : messageInput
    };

    threadCopy.replies.push(newMessage);
    siteCopy.splice(props.currentThread!, 1);
    siteCopy.unshift(threadCopy);
    props.updateSite(siteCopy);
    props.newThread(0);
  }

  return (
    <div id="inputContainer">
      <input type="text"
        onChange={handleNameChange}
        id="nameEntry"
        value="Username">
      </input>
      <textarea id="messageEntry"
        onChange={handleMessageChange}>
        Enter your message here.
      </textarea>
      <input type="button"
        id="messageSubmit"
        value="Submit"
        onClick={handleSubmit}>
      </input>
    </div>
  );
}
