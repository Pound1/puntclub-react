import React from 'react'
import { BetSlipStyles } from '../styles/BetSlip'

class BetSlip extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  formateDate(d) {
    console.log(d)
    let unix_timestamp = d
    // Create a new JavaScript Date object based on the timestamp
    // multiplied by 1000 so that the argument is in milliseconds, not seconds.
    var date = new Date(unix_timestamp * 1000)

    var day = date.getDate()
    var month = date.getMonth() + 1
    var year = date.getFullYear()

    var hours = date.getHours()
    var minutes = '0' + date.getMinutes()
    var seconds = '0' + date.getSeconds()

    // Will display time in 10:30:23 format
    var formattedTime =
      day +
      '/' +
      month +
      '/' +
      year +
      ' ' +
      hours +
      ':' +
      minutes.substr(-2) +
      ':' +
      seconds.substr(-2)

    console.log(formattedTime)
    return formattedTime
  }

  render() {
    console.log(this.props.bet)
    return (
      <div className="betSlipContainer">
        <BetSlipStyles />
        <div className="betHeader">
          <h3>{this.props.bet.user}</h3>
          <p>{this.formateDate(this.props.bet.date)}</p>
        </div>
      </div>
    )
  }
}

export default BetSlip
