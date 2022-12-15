import React from 'react'

const RealTimeCoinRise = ({ coinRise }) => {
    let coinRiseArray = coinRise;
  return (
    <div className="realtime-order-texts">
          <div className="order-text">{coinRiseArray[0]}%</div>
          <div className="order-text">{coinRiseArray[1]}%</div>
          <div className="order-text">{coinRiseArray[2]}%</div>
          <div className="order-text">{coinRiseArray[3]}%</div>
          <div className="order-text">{coinRiseArray[4]}%</div>
          <div className="order-text">{coinRiseArray[5]}%</div>
          <div className="order-text">{coinRiseArray[6]}%</div>
          <div className="order-text">{coinRiseArray[7]}%</div>
          <div className="order-text">{coinRiseArray[8]}%</div>
          <div className="order-text">{coinRiseArray[9]}%</div>
      
    </div>
  );
}

export default RealTimeCoinRise