import React from "react";
import "./main.css";
import EachWinnerRecord from "./EachWinnerRecord";
import cookie11 from "../images/cookie11.gif"
import RankText from "./RankText";

const WinnerRecord = () => {
  return (
    <div className="winner-record-div">
      <div>#5 Winner Record</div>
      <div className="title-div">
        <div className="titleText">역대 고액 당첨자</div>
      </div>
      <div className="winner-record-layout">
        <RankText/>
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
