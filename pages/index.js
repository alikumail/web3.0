import React ,{Component} from 'react';

class Lottery extends Component {
render(){
    return (
      <div>
          <h1>Total Lottery Pool  is 1000</h1>
          <form>
              <input type="text" value="1.5" /> 
              <button type="submit">Participate</button>
          </form>
          <hr></hr>
          <p>The Manager of the lottery decentralized pool app is </p>
          <button>Pick Winners</button>
      </div>
      
    )
}
}

export default Lottery;