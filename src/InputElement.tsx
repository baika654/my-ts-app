import React from 'react';
import './App.css';
import styled from 'styled-components';

interface Props  {
    isValidKeyCombination:boolean,
    currentState:{eventKey:string, eventCode:string}
}

/*
type Props = {
  isValidKeyCombination:boolean,
  currentState:{eventKey:string}
} */


const LargeLetterContainer = styled.div`
    
    width: 100%;
    color: red;
    font-size: 20vw;
    text-align: center;
    
 `;

 const StringContainer = styled.div`
    
    width: 20%;
    color: white;
    font-size: 1vw;
    text-align: center;
    border-radius: 16px;
    border: 1px solid white;
    
 `;

/**  For the array to work correctly, the modifier keys have to be added in alphabetical order.
 *  So Control+Shift is valid but Shift+Control is not. All keypresses detected by
 *  this method will sort modifier keys into alphabetical order 
*/

const reservedKeyCombinations = ['Control+KeyG',
'Control+KeyH',
'Control+KeyI',
'Control+KeyN',
'Control+KeyP',
'Control+KeyR',
'Control+KeyT',
'Control+KeyZ',
'F4',
'Control+Shift+KeyA',
'Control+Shift+KeyC',
'Control+Shift+KeyD',
'Control+Shift+KeyE',
'Control+Shift+f4',
'Control+Shift+KeyH',
'Control+Shift+KeyL',
'Control+Shift+KeyN',
'Control+Shift+KeyO',
'Control+Shift+KeyP',
'Control+Shift+KeyR',
'Control+Shift+KeyS',
'Control+Shift+KeyV',
'Control+Shift+KeyZ',
'Control+space',
'Meta+KeyG',
'Meta+KeyH',
'Meta+KeyI',
'Meta+KeyN',
'Meta+KeyP',
'Meta+KeyR',
'Meta+KeyT',
'Meta+KeyZ',
'F4',
'Meta+Shift+KeyA',
'Meta+Shift+KeyC',
'Meta+Shift+KeyD',
'Meta+Shift+KeyE',
'Meta+Shift+f4',
'Meta+Shift+KeyH',
'Meta+Shift+KeyL',
'Meta+Shift+KeyN',
'Meta+Shift+KeyO',
'Meta+Shift+KeyP',
'Meta+Shift+KeyR',
'Meta+Shift+KeyS',
'Meta+Shift+KeyV',
'Meta+Shift+KeyZ',
'Meta+space']

export default class InputElements extends React.Component<Props> {

  keyInputBuffer:string ='';
  modifier:boolean = false;
    
  render() {
    const keyInput = this.props.currentState.eventKey===' ' ? 'space' :this.props.currentState.eventKey;
    const keyCode = this.props.currentState.eventCode;
    if (keyInput=== 'Control'||keyInput==='Alt'||keyInput==='Shift'||keyInput==='Command'||keyInput==='Meta')  {
       if (this.modifier) {
        if (!this.keyInputBuffer.includes(keyInput)) {
          const unsortedKeyInputBuffer = this.keyInputBuffer.concat('+',keyInput);
          this.keyInputBuffer = unsortedKeyInputBuffer.split('+').sort().join('+');
        }
       } else {
          this.keyInputBuffer = keyInput;
          this.modifier=true;
       }
      
    } else {
      if (this.modifier) {
        console.log(this.keyInputBuffer);
        this.keyInputBuffer = this.keyInputBuffer.concat('+',keyCode);
        this.modifier = false;
      } else {
        this.keyInputBuffer = keyCode;
      }
    }

    return (
    <div>
      
            <LargeLetterContainer>
                {reservedKeyCombinations.includes(this.keyInputBuffer)? 'NO!!' : 'YES'}
            </LargeLetterContainer>
            <StringContainer>
                {this.keyInputBuffer}
            </StringContainer>
            
      
    </div> );
  }
}


