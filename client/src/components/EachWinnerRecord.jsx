import React from 'react'
import "./main.css";

const EachWinnerRecord = ({walletAddress, rewardAmount}) => {
  return (
    <div className="each-winner-record">
      <div className="each-winner-info">
              {walletAddress} : {rewardAmount} klay
      </div>
    </div>
  );
}

export default EachWinnerRecord