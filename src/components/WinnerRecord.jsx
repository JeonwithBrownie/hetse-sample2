import React from "react";
import "./main.css";
import EachWinnerRecord from "./EachWinnerRecord";

const WinnerRecord = () => {
  return (
    <div className="winner-record-div">
      <div>#4 Winner Record</div>
      <div className="title-div">
        <div className="titleText">역대 고액 당첨자</div>
      </div>
      <div className="winner-record-layout">
        <div className="winner-order-texts">
          <div className="order-text">1위 : </div>
          <div className="order-text">2위 : </div>
          <div className="order-text">3위 : </div>
          <div className="order-text">4위 : </div>
          <div className="order-text">5위 : </div>
          <div className="order-text">6위 : </div>
          <div className="order-text">7위 : </div>
          <div className="order-text">8위 : </div>
          <div className="order-text">9위 : </div>
          <div className="order-text">10위 : </div>
        </div>
        <div className="winner-record-ranking">
          <EachWinnerRecord
            walletAddress={"0xd03345B2ABDA4103415B5eb20862990E1E3b33a8"}
            rewardAmount={"52435802"}
          />
          <EachWinnerRecord
            walletAddress={"0xd03345B2ABDA4103415B5eb20862990E1E3b33a8"}
            rewardAmount={"52435802"}
          />
          <EachWinnerRecord
            walletAddress={"0xd03345B2ABDA4103415B5eb20862990E1E3b33a8"}
            rewardAmount={"52435802"}
          />
          <EachWinnerRecord
            walletAddress={"0xd03345B2ABDA4103415B5eb20862990E1E3b33a8"}
            rewardAmount={"52435802"}
          />
          <EachWinnerRecord
            walletAddress={"0xd03345B2ABDA4103415B5eb20862990E1E3b33a8"}
            rewardAmount={"52435802"}
          />
          <EachWinnerRecord
            walletAddress={"0xd03345B2ABDA4103415B5eb20862990E1E3b33a8"}
            rewardAmount={"52435802"}
          />
          <EachWinnerRecord
            walletAddress={"0xd03345B2ABDA4103415B5eb20862990E1E3b33a8"}
            rewardAmount={"52435802"}
          />
          <EachWinnerRecord
            walletAddress={"0xd03345B2ABDA4103415B5eb20862990E1E3b33a8"}
            rewardAmount={"52435802"}
          />
          <EachWinnerRecord
            walletAddress={"0xd03345B2ABDA4103415B5eb20862990E1E3b33a8"}
            rewardAmount={"52435802"}
          />
          <EachWinnerRecord
            walletAddress={"0xd03345B2ABDA4103415B5eb20862990E1E3b33a8"}
            rewardAmount={"52435802"}
          />
        </div>
      </div>
    </div>
  );
};

export default WinnerRecord;
