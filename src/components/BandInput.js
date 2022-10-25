// Add BandInput component
import React, { Component } from 'react';


class BandInput extends Component {

 state = {
      name: ''
    }
  

  handleChange = (event) => {
    const { value } = event.target
    // console.log(event.target.value)
    this.setState({
      name: value
    })
    console.log(this.state.name)
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addBand(this.state)
    this.setState({
      name: ''
    })
  }

  render() {
    return(
      <div>
        
        {/* {console.log(this.props.addBand)} */}
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} name='name' type="text" value={this.state.name} />
          <input  type='submit'/>
        </form>
      </div>
    )
  }
}

export default BandInput
