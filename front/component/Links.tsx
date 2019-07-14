import React, { Component } from "react";


export default class Accounts extends Component<IProps> {
  render () {
    return (
    <div>
      <div className="siimple-alert siimple-alert--green">
        [Portfolio的なやつ]
      </div>
      <a href="https://site.im-neko.net">ねこの部屋 - Blog</a>
      <a href="https://www.resume.id/neko">resume</a>
      <br />
      <a href="https://portfolio.forkwell.com/@Im-neko">forkwell</a> 

      <div className="siimple-alert siimple-alert--green">
        [相互リンク様]
      </div>
      <a href="https://rhenium.dev">れにうむのポートフォリオ</a>
      <br/>

    </div>
    )
  }
}
