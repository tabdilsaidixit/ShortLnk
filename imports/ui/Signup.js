import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

export default class Signup extends React.Component{
  render(){
    return(
      <div>
        <h1> Join Short Link</h1>
        <Link to="/"> Already have an account</Link>
      </div>
    );
  }
}
