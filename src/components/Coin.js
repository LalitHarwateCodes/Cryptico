import React from "react";
import "../App.css";
import "../query.css";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'


function Coin({ image, name, symbol, high, low, priceChange, price }) {
  return (
    <div>
    
      <div className="box-2">
     
      
        <img className="coin-img" src={image || <Skeleton width={40} height={40}/>} alt="coins" />

        <h2 className="coin-heading">
          {name}
        </h2>

        {priceChange < 0 ? (
          <h2 className="coin-volume red"> &#x20B9;{price.toLocaleString()}</h2>
        ) : (
          <h2 className="coin-volume green">
            
            &#x20B9;{price.toLocaleString()}
          </h2>
        )}

          <div className="market-info">
          <div className="mark-el"><p className="light">24h High:</p>  <p className="dark">&#x20B9;{high?.toLocaleString()}</p></div>
          <div className="mark-el"><p className="light">24h Low:</p>  <p className="dark">&#x20B9;{low?.toLocaleString()}</p></div>
          <div className="mark-el"><p className="light">Market:</p>  <p className="dark">{symbol.toUpperCase()}INR</p></div>
     
        
        </div>
      </div>
    </div>
  );
}

export default Coin;
