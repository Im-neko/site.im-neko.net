import React, { Component } from 'react';
import AdSense from 'react-adsense';

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
          <AdSense.Google
            client='ca-pub-3933354234319712'
            slot='5700255991'
            style={{ display: 'block' }}
            format='auto'
            responsive='true'
            layoutKey='-gw-1+2a-9x+5c'
          />
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
