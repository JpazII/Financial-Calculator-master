import React, { Component } from "react";

export default class Userdetails extends Component {
  constructor (props) {
    super(props);
    this.state = {
      userData: "",
      
    };
  }
  // componentDidCatch(){
  //   fetch("http://localhost:5000/financialData", {
  //     method: "POST",
  //     crossDomain: true,
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //       "Access-Control-Allow-Origin": "*",
  //     },
  //     body: JSON.stringify({
  //       token:window.localStorage.getItem("token"),
  //     }),
  //   })
  //   .then((res) => res.json())
  //   .then((data) => {
  //     console.log(data,"financialData");
  //     this.setState({financialData: data.data});
  //   });
  // }

	componentDidMount(){
		fetch("http://localhost:5000/userData", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        token:window.localStorage.getItem("token"),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data,"userData");
        this.setState({userData: data.data});

        });
	}
  logOut=() =>{
    window.localStorage.clear();
    window.location.href="./sign-in"
  }
	render() {
    return (
        <div>
            Name:<h1>{this.state.userData.fname}</h1>
            Email: <h1>{this.state.userData.email}</h1><br/>
            Loan Amount:<h1>{this.state.userData.lamount}</h1>
            Loan Term:<h1>{this.state.userData.lterm}</h1>
            Interest Rate:<h1>{this.state.userData.irate}</h1>
            Backend Cost:<h1>{this.state.userData.bcost}</h1>
            Balance:<h1>{this.state.userData.balance}</h1>
            APR:<h1>{this.state.userData.apr}</h1>
            Loan Payment:<h1>{this.state.userData.lpayment}</h1>
            Deposit Amount:<h1>{this.state.userData.damount}</h1>
            APY:<h1>{this.state.userData.apy}</h1>
            Loan Amount:<h1>{this.state.userData.lAmount}</h1>
            APR:<h1>{this.state.userData.APR}</h1>
            Loan Rate:<h1>{this.state.userData.iRate}</h1>
            Loan Term:<h1>{this.state.userData.lTerm}</h1>
            BCost:<h1>{this.state.userData.bCost}</h1>

            <button onClick={this.logOut} className="btn btn-primary">Log Out</button>
          </div>
        )
      }
  }