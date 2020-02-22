import React, {Component}  from 'react';
import Button from './Button'
import Statics from './Statics'
import Aux from 'react-aux'


class App extends Component {
  constructor(props) {
    super(props) ;
      this.state = {
        good: 0,
        neutral: 0,
        bad: 0,
        total: 0,
        positive: 0
      }   
  }
 

  handleGood = () => {
    this.setState({good: this.state.good + 1, total: this.state.total +1})
  }
  handleNeutral = () => {
    this.setState({neutral: this.state.neutral + 1, total: this.state.total +1})
  }
  handleBad = () => {
    this.setState({bad: this.state.bad + 1, total: this.state.total +1})
  }


  render() {
  let positive;
  if (positive <= 0) {
      positive = 0 + "%"
  }else {
  positive = ((this.state.good / this.state.total) * 100).toFixed(1) + "%";
  }
 
  return (
    <Aux>
      <div> 
          <h1>Give feedback</h1>
          <Button clickHandler={() => this.handleGood()} text="Good" />
          <Button clickHandler={() => this.handleNeutral()} text="Neutral" />
          <Button clickHandler={() => this.handleBad()} text="bad" />
       
      </div>
      <div>
          <Statics 
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.state.total}
          positive={positive}
          />
      
      </div>
    </Aux>
  );
}
}
export default App;
