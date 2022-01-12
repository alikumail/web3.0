import React ,{Component} from 'react';
import lottery from '../lottery';
//import web3 from '../web3';
class Lottery extends Component {
    constructor(props) {
     super(props);
     this.state = {
         manager : '',
         participants_amount: '0.5',
         message : '' 
     }
    }
    async componentDidMount() {
        try{
        const manager = await lottery.methods.manager().call();
        console.log(manager);
        } catch(e){
            console.log(e);
        }
       //this.setState({manager : manager});
    }
render(){
    return (
      <div>
          <h1>Total Lottery Pool  is 1000</h1>
          <form>
              <input type="text" placeholder="1.5" /> 
              <button type="submit">Participate</button>
          </form>
          <hr></hr>
          <p>The Manager of the lottery decentralized pool app is {this.state.manager} </p>
          <button>Pick Winners</button>
      </div>
      
    )
}
}

export default Lottery;