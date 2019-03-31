import React, { Component } from "react";


export default class Footer extends Component<IProps> {
  render () {
    return (
      <div id="footer" style={style}>
        <div className="siimple-footer siimple-footer--teal siimple-footer--fluid" align="center">
          Copyright © 2018- Im-neko.net All Rights Reserved. <br/>
          Powered by neko<br/>
          <br/>
        </div>
      </div>
    )
  }
}

const style = {
  position: "fixed",
  bottom: "0",
  width: "100%",
  height: "10%"
}
