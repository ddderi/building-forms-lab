import React, { Component } from 'react';
import BandInput from '../components/BandInput';
import { connect } from 'react-redux';
// import { addBand } from '../reducers/manageBand';

class BandsContainer extends Component {
  render() {
    return(
      <div>
        <BandInput addBand={this.props.addBand} />
        <ul>
          {console.log(this.props.bands)}
        {this.props.bands.length>0? this.props.bands.map((band, index) => {return <li key={index} >{band.name}</li>}) : <div>no BANDS</div>}
        </ul>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addBand: (band) => {
      dispatch({type: "ADD_BAND", payload: band})
    }
  }
}

const mapStateToProps = state => {
  return {
    bands: state.bands
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
