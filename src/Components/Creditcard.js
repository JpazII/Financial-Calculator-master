import React, { Component } from 'react'

export default class Creditcard extends Component {
  render() {
    return (
      <form>
        <h3> Credit Card Payment </h3>

        <div >
          <label>Balance: </label>
          <input
            type="Balance"
            placeholder="Enter Balance"
            onCharge={(e) => this.setState({ ccbalance: e.target.value })}
          />
        </div>

        <div>
          <label>APR: </label>
          <input
            type="APR"
            placeholder="Enter APR"
            onCharge={(e) => this.setState({ ccapr: e.target.value })}
          />
        </div>

        <div>
          <label>(optional) Late Payment: </label>
          <input
            type="Late Payment"
            placeholder="Enter any Late Payment"
            onCharge={(e) => this.setState({ cclpayment: e.target.value })}
          />
        </div>

        <div >
          <button type="submit">
            Submit
          </button>
        </div>
        
      </form>
    )
  }
}