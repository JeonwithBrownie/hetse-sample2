import React from 'react'
import "./main.css";
import RankText from './RankText';
import RealTimeCoinRise from './RealTimeCoinRise';
import ProgressBar from './ProgressBar';

const RealTimeRanking = () => {
  let coinRise = [5.2, 3.2, 2.2, 1.2, 0.3, 0.7, 5.2, -0.3, -0.6, 0, 5];
  return (
    <div className="history-div">
      <div>#6 Real Time Ranking</div>
      <div className="title-div">
        <div className="titleText">실시간 순위</div>
      </div>
      <div className="real-time-ranking-layout">
        <RankText />
        <ProgressBar/>
        <RealTimeCoinRise coinRise={coinRise} />
      </div>
    </div>
  );
}

export default RealTimeRanking