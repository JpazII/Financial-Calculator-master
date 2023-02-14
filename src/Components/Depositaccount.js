import React, { Component } from 'react'

export default class Depositaccount extends Component {
  render() {
    return (
      <form>
        <h3> Deposit Account </h3>

        <div>
          <label>Deposit Amount: </label>
          <input
            type="Deposit Amount"
            placeholder="Enter Deposit Amount"
            onCharge={(e) => this.setState({ dadamount: e.target.value })}
          />
        </div>

        <div>
          <label>APY: </label>
          <input
            type="APY"
            placeholder="Enter APY"
            onCharge={(e) => this.setState({ daapy: e.target.value })}
          />
        </div>

        <div>
          <button type="submit">
            Submit
          </button>
        </div>
        
      </form>
    )
  }
}