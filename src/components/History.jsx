import React from "react";
import "./main.css";
import cookie1 from "../images/cookie1.gif";
import cookie2 from "../images/1-1.png";
import bitcoin from "../images/bitcoin.png";
import ether from "../images/ether.png";
import bnb from "../images/bnb.png";
import ripple from "../images/ripple.png";
import bora from "../images/bora.png";
import wemix from "../images/wemix.png";
import klayswap from "../images/klayswap.png";
import klaytn from "../images/klaytn.png";
import marblex from "../images/marblex.png";
import orbit from "../images/orbit.png";

import EachCoinRise from "./EachCoinRise";
import HistoryCoinRanking from "./HistoryCoinRanking";

const History = () => {
  return (
    <div className="history-div">
      <div>#4 History</div>
      <div className="title-div">
        <div className="titleText">히스토리</div>
      </div>
      <div className="history-order-box">
        <div className="order-texts">
          <div className="order-text">1등</div>
          <div className="order-text">2등</div>
          <div className="order-text">3등</div>
          <div className="order-text">4등</div>
          <div className="order-text">5등</div>
        </div>
        <HistoryCoinRanking
          month={"11"}
          week={"첫"}
          coin1={bitcoin}
          coin2={ether}
          coin3={marblex}
          coin4={orbit}
          coin5={bora}
          coinRise1={"5.1"}
          coinRise2={"2.3"}
          coinRise3={"1.6"}
          coinRise4={"0.7"}
          coinRise5={"0.3"}
        />
        <HistoryCoinRanking
          month={"10"}
          week={"넷"}
          coin1={orbit}
          coin2={ether}
          coin3={bora}
          coin4={bnb}
          coin5={ripple}
          coinRise1={"5.1"}
          coinRise2={"2.3"}
          coinRise3={"1.6"}
          coinRise4={"0.7"}
          coinRise5={"0.3"}
        />
        <HistoryCoinRanking
          month={"11"}
          week={"첫"}
          coin1={ripple}
          coin2={wemix}
          coin3={marblex}
          coin4={klaytn}
          coin5={bnb}
          coinRise1={"5.1"}
          coinRise2={"2.3"}
          coinRise3={"1.6"}
          coinRise4={"0.7"}
          coinRise5={"0.3"}
        />
      </div>
    </div>
  );
};

export default History;
