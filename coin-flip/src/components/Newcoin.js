import React, { Component } from 'react'

class Newcoin extends Component {
    render() {
      return (
        <div className='Coin'>
          <h1>{this.props.info.imgSrc}</h1>
        </div>
      );
    }
  }

  export default Newcoin;