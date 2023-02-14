import React, { Component } from 'react'

export default class Calculate extends Component {
  constructor(props){
    super(props)
    this.state={
      lamount:"",
      lterm:"", 
      irate:"", 
      bcost:"", 
      balance:"", 
      apr:"", 
      lpayment:"", 
      damount:"", 
      apy:"", 
      lAmount:"", 
      APR:"", 
      IRate:"",
      lTerm:"",
      bCost:""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const { lamount, lterm, irate, bcost, balance, apr, lpayment, damount, apy, lAmount, APR, IRate,lTerm,bCost} = this.state;
    console.log(lamount, lterm, irate, bcost, balance, apr, lpayment, damount, apy, lAmount, APR, IRate,lTerm,bCost);
    fetch("http://localhost:5000/calculate", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        lamount,
        lterm, 
        irate, 
        bcost, 
        balance, 
        apr, 
        lpayment, 
        damount, 
        apy, 
        lAmount, 
        APR, 
        IRate,
        lTerm,
        bCost
      }),
    })
    .then((res) => res.json())
    .then((data) => {
      console.log(data,"FinancialData");
      });
      
  }
  render() {
    return (
      
      

        
          <form onSubmit={this.handleSubmit}>
            <h3> Closed End Loan </h3>

              <div>
                <label>Loan Amount: </label>
                <input
                  type="Loan Amount"
                  placeholder="Enter Loan Amount"
                  onChange={(e) => this.setState({ lamount: e.target.value })}
                />
              </div>

              <div>
                <label>Loan Term: </label>
                <input
                  type="Loan Term"
                  placeholder="Enter Loan Term"
                  onChange={(e) => this.setState({ lterm: e.target.value })}
                />
              </div>

              <div>
                <label>Interest Rate: </label>
                <input
                  type="Interest Rate"
                  placeholder="Enter Interest Rate"
                  onChange={(e) => this.setState({ irate: e.target.value })}
                />
              </div>

              <div>
                <label>Backend Cost: </label>
                <input
                  type="Backend Cost"
                  placeholder="Enter Backend Cost"
                  onChange={(e) => this.setState({ bcost: e.target.value })}
                />
              </div>
              <h3> Credit Card Payment </h3>

              <div>
                <label>Balance: </label>
                <input
                  type="Balance"
                  placeholder="Enter Balance"
                  onChange={(e) => this.setState({ balance: e.target.value })}
                />
              </div>

              <div>
                <label>APR: </label>
                <input
                  type="APR"
                  placeholder="Enter APR"
                  onChange={(e) => this.setState({ apr: e.target.value })}
                />
              </div>

              <div>
                <label>(optional) Late Payment: </label>
                <input
                  type="Late Payment"
                  placeholder="Enter Late Payment"
                  onChange={(e) => this.setState({ lpayment: e.target.value })}
                />
              </div>
              <h3> Deposit Account </h3>

            <div>
              <label>Deposit Amount: </label>
              <input
                type="Deposit Amount"
                placeholder="Enter Deposit Amount"
                onChange={(e) => this.setState({ damount: e.target.value })}
              />
            </div>

            <div>
              <label>APY: </label>
              <input
                type="APY"
                placeholder="Enter APY"
                onChange={(e) => this.setState({ apy: e.target.value })}
              />
            </div>
            <h3> Mortgage Calculator </h3>

            <div>
              <label>Loan Amount: </label>
              <input
                type="Loan Amount"
                placeholder="Enter Loan Amount"
                onChange={(e) => this.setState({ lAmount: e.target.value })}
              />
            </div>

            <div>
              <label>APR: </label>
              <input
                type="APR"
                placeholder="Enter Loan Term"
                onChange={(e) => this.setState({ APR: e.target.value })}
              />
            </div>

            <div>
              <label>Interest Rate: </label>
              <input
                type="Interest Rate"
                placeholder="Enter Interest Rate"
                onChange={(e) => this.setState({ IRate: e.target.value })}
              />
            </div>

            <div>
              <label>Loan Term: </label>
              <input
                type="Loan Term"
                placeholder="Enter Loan Term"
                onChange={(e) => this.setState({ lTerm: e.target.value })}
              />
            </div> 
            
            <div>
              <label>Backend Cost: </label>
              <input
                type="Backend Cost"
                placeholder="Enter Backend Cost"
                onChange={(e) => this.setState({ bCost: e.target.value })}
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

