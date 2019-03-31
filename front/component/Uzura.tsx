import React, {Component} from "react";


export default class Description extends Component<IProps> {
  render () {
    return (
      <div className="uzura-stream" >
        <hr />
        弊うずらの孵卵器の様子です<br />
        <img 
          src="https://uzura.im-neko.net:8181/?action=stream" 
          alt="uzura-video"
          width="100%"
          height="56%"
          />
        <br />
        <a href="https://uzura.im-neko.net:8181/?action=stream"> よくみる </a>
      </div>
    )
  }
}
