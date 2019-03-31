import React, { Component } from "react";


export default class Accounts extends Component<IProps> {
  render () {
    return (
    <div>
      <div className="siimple-alert siimple-alert--blue">
        [Accounts]
      </div>
      <a href="https://twitter.com/Im_nuko"><img src={`/static/images/twitter.png`} width="20%" height="20%" alt="twitter" /></a><a href="https://github.com/Im-neko"><img src={`/static/images/github.jpeg`}  width="20%" height="20%" alt="github" /></a><br/>
      <a href="https://www.amazon.co.jp/registry/wishlist/1HSBJ2VBT6MAD/ref=cm_sw_r_cp_ep_ws_dlEmAb99YZFF5"><img src={`/static/images/amazon.png`} width="20%" height="20%" alt="amazon" /></a><a href="https://peing.net/ja/im_nuko"><img src={`/static/images/peing.jpeg`} width="20%" height="20%" alt="peing" /></a><br/>
      <br/>
    </div>
    )
  }
}
