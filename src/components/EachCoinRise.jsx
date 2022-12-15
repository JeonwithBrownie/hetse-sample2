import React from 'react'
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

const EachCoinRise = ({coin, coinRise}) => {
  return (
    <div className="history-coin">
      <img className="history-coin-image" src={coin} alt="coin" />
          <div>{coinRise}%</div>
    </div>
  );
}

export default EachCoinRise