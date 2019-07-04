import React, { Component } from 'react';

import Header from '../component/Header';
import Accounts from '../component/Accounts';
import Description from '../component/Description';
import Links from '../component/Links';


export default class Main extends Component<IProps> {   
  render() {
    return (
      <div style={style}>
        <link href="/static/css/siimple.min.css" rel="stylesheet" />
        <center>
          <Header />
          <Accounts />
          <Description />
          <Links />
        </center>
      </div>
    );
  }
}

const style = {
  margin: 0,
  padding: 0,
  fontFamily: "sans-serif",
}
