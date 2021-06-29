import * as React from 'react';
import {
  useState,
  Dispatch,
  SetStateAction
} from 'react';
import type { Thread, Message, Mode } from './types';

interface NewThreadContainerProps {
  site : Thread[];
  updateSite : Dispatch<SetStateAction<Thread[]>>;
  setMode : Dispatch<SetStateAction<Mode>>;
}
export function NewThreadContainer (props : NewThreadContainerProps) {
  return(<div></div>);
}
