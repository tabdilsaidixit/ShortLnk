import React from 'react';
import ReactDOM from 'react-dom';
import {browserHistory } from 'react-router';

export default class Link extends React.Component{
  onLogout(){
    browserHistory.push("/");
  }
  render(){
    return (
      <div>
        <button onClick= {this.onLogout.bind(this)}>
        Logout
        </button>
      </div>

    );
  }
}
