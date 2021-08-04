import React from 'react';
import './App.css';
import styled from 'styled-components';

interface Props  {
    isValidKeyCombination:boolean,
    currentState:{eventKey:string}
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

const reservedKeyCombinations = ['Control+g',
'Control+h',
'Control+i',
'Control+n',
'Control+p',
'Control+r',
'Control+t',
'Control+z',
'f4',
'Control+Shift+a',
'Control+Shift+c',
'Control+Shift+d',
'Control+Shift+e',
'Control+Shift+f4',
'Control+Shift+h',
'Control+Shift+l',
'Control+Shift+n',
'Control+Shift+o',
'Control+Shift+p',
'Control+Shift+r',
'Control+Shift+s',
'Control+Shift+v',
'Control+Shift+z',
'Control+space']

export default class InputElements extends React.Component<Props> {

  keyInputBuffer:string ='';
  modifier:boolean = false;
    
  render() {
    const keyInput = this.props.currentState.eventKey===' ' ? 'space' :this.props.currentState.eventKey;
    if (keyInput=== 'Control'||keyInput==='Alt'||keyInput==='Shift'||keyInput==='Command')  {
       if (this.modifier) {
        if (!this.keyInputBuffer.includes(keyInput)) {
          this.keyInputBuffer = this.keyInputBuffer.concat('+',keyInput);
        }
       } else {
          this.keyInputBuffer = keyInput;
          this.modifier=true;
       }
      
    } else {
      if (this.modifier) {
        console.log(this.keyInputBuffer);
        this.keyInputBuffer = this.keyInputBuffer.concat('+',keyInput.toLowerCase());
        this.modifier = false;
      } else {
        this.keyInputBuffer = keyInput.toLowerCase();
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


