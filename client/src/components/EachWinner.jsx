import React from 'react'
import doge from "../images/doge.png";
import coin from "../images/coin.gif";

const EachWinner = ({rewardAmount, walletAddress, userImage, userInput}) => {
  return (
    <div>
      <div className="pfp-info-layout">
        <div className="klay-reward-text">
          <img className="coinImage" src={coin} alt="spinning coin" />
                  {rewardAmount} klay 획득
        </div>
        <div className="pfp-user">
          <img src={userImage} className="winner-pfp" />

          <div className="pfp-info">
            <div className="pfp-wallet-address">
              {walletAddress}
            </div>

            <div class="nes-container is-rounded is-dark">
                          <p>{userInput}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EachWinner