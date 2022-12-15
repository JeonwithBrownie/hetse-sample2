import React from "react";
import "./main.css";
import EachCoinRise from "./EachCoinRise";

const HistoryCoinRanking = ({month, week, coin1, coin2, coin3, coin4, coin5, coinRise1, coinRise2, coinRise3, coinRise4, coinRise5}) => {
  return (
    <div className="history-box-layout">
          <div className="week-text">{month}월 {week}째 주 : </div>

      <div className="history-ranking">
        <EachCoinRise coin={coin1} coinRise={coinRise1} />
        <EachCoinRise coin={coin2} coinRise={coinRise2} />
        <EachCoinRise coin={coin3} coinRise={coinRise3} />
        <EachCoinRise coin={coin4} coinRise={coinRise4} />
        <EachCoinRise coin={coin5} coinRise={coinRise5} />
      </div>
    </div>
  );
};

export default HistoryCoinRanking;
