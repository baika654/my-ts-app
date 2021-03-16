import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

class MemberAccount {
  firstname: string;
  lastname: string;
  account_number: number;

  constructor(firstname: string, lastname: string, account_number: number) {
    this.firstname= firstname;
    this.lastname = lastname;
    this.account_number = account_number;
  }
}

let GroupAccounts: Array<MemberAccount> = [];

GroupAccounts.push(new MemberAccount("Karl","Bailey",123467676701));
GroupAccounts.push(new MemberAccount("Blair","Bailey",123467677601));
GroupAccounts.push(new MemberAccount("Pummy","Bailey",123467676801));
GroupAccounts.push(new MemberAccount("David","Myint",123467676901));
GroupAccounts.push(new MemberAccount("Pearl","Swe",123467677001));
GroupAccounts.push(new MemberAccount("George","Smith",123467677101));


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
