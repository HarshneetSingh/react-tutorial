
import React, { Component } from 'react'

export class conditionalRendering extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    }
  }
  render() {
    return(
      <div className="d-flex justify-content-center"><h1>Welcome {this.state.isLoggedIn?"Harshi":"Guest"}</h1></div>
    )
  }
}


export default conditionalRendering