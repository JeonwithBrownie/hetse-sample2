import React from "react";
import "./main.css";
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

const Game = () => {
  return (
    <div className="game-div">
      <div>#2 Game</div>
      <div className="title-div">
        <div className="titleText">게임페이지</div>
      </div>
      <div className="coinContainerWrapper">
        <div className="coinContainer">
          <div className="textDiv"> 예측 코인을 순서대로 눌러주세요</div>

          <div class="nes-container is-dark with-title predict">
            <p>
              <img className="coin" src={bitcoin} alt="bitcoin" />
              <img className="coin" src={ether} alt="bitcoin" />
              <img className="coin" src={bnb} alt="bitcoin" />
              <img className="coin" src={ripple} alt="bitcoin" />
              <img className="coin" src={bora} alt="bitcoin" />
              <br></br>
              <img className="coin" src={wemix} alt="bitcoin" />
              <img className="coin" src={klaytn} alt="bitcoin" />
              <img className="coin" src={klayswap} alt="bitcoin" />
              <img className="coin" src={marblex} alt="bitcoin" />
              <img className="coin" src={orbit} alt="bitcoin" />
            </p>
            <a class="nes-btn predict" href="#">
              자동 선택
            </a>
          </div>
          <div button type="button" class="nes-btn is-warning predict">
            15000 klay 도전!
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
