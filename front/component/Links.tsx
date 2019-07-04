import React, { Component } from "react";


export default class Accounts extends Component<IProps> {
  render () {
    return (
    <div>
      <div className="siimple-alert siimple-alert--green">
        [Portfolio的なやつ]
      </div>
      <a href="https://www.resume.id/">resume</a>
      <br />
      <a href="https://portfolio.forkwell.com/">forkwell</a> 

      <div className="siimple-alert siimple-alert--green">
        [相互リンク様]
      </div>
      <a href="https://rhenium.dev">れにうむのポートフォリオ</a>
      <br/>

    </div>
    )
  }
}
