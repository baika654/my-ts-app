import React, { Component } from 'react';
import styled from 'styled-components';

import './App.css';
import InputElements from './InputElement';

interface Props {};

const FullContainer = styled.div`
    
    width: 100%;
    text-align: center;
    
 `;

class App extends Component {
  header: React.RefObject<HTMLDivElement>;

constructor(props:Props) {
  super(props)
  this.handleClick = this.handleClick.bind(this)
  this.header = React.createRef();
}

  state = {eventKey:""};


handleClick(event: React.KeyboardEvent<HTMLDivElement>):void {
		console.log(`Key: ${event.key} with keycode X has been pressed`);
    this.setState({eventKey: event.key});
    event.preventDefault();
}

componentDidMount() {
  this.header.current?.focus();
}



  render() {return (
    <header ref={this.header} className="App-header" tabIndex={0} onKeyDown={this.handleClick}>
      <FullContainer>
        
        <InputElements currentState={this.state} isValidKeyCombination={true} />
      </FullContainer>
    </header>
  );
  }
}

export default App;
