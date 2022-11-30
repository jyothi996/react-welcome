// Write your code here
import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {
    isSubscribed: false,
  }

  onSubscribed = () => {
    this.setState(prevState => ({isSubscribed: !prevState.isSubscribed}))
  }

  getButtonText = () => {
    const {isSubscribed} = this.state

    return isSubscribed ? 'Subscribed' : 'Subscribe'
  }

  render() {
    const buttonText = this.getButtonText()
    return (
      <div className="bg-container">
        <h1 className="main-heading">welcome</h1>
        <p className="description">Thank you! Happy Learning</p>

        <button className="button" onClick={this.onSubscribed} type="button">
          {buttonText}
        </button>
      </div>
    )
  }
}

export default Welcome
