import React from "react";
import { useParams } from "react-router-dom";

const Stonk = ({ stonkData }) => {
  const params = useParams();

  const stonk = stonkData.find((s) => {
    return s.symbol === params.symbol;
  });
  console.log(stonk);

  const changeSymbol = stonk.change >= 0 ? "+" : "-";
  const changeSymbolIfNeg = stonk.change >= 0 ? "" : "-";
  const changeColor = stonk.change >= 0 ? "green" : "red";
  const percentageChange = (stonk.change / stonk.lastPrice) * 100;

  return (
    <div className="main-content">
      <div className="stonk-details">
      <h2>
        <span>{stonk.symbol}</span>
      </h2>
      <h3>
        <span>{stonk.name}</span>
      </h3>
      <hr/>
      <h4>
        Last Price: <b>{stonk.lastPrice}</b>
      </h4>
      <h4>
        Price Change:{" "}
        <span style={{ color: changeColor }}>
          {" "}
          <b>
            {changeSymbolIfNeg}${Math.abs(stonk.change).toFixed(2)}
          </b>{" "}
          (
          <em>
            {changeSymbol}
            {Math.abs(percentageChange).toFixed(2)}%
          </em>
          )
        </span>
      </h4>
      <h4>
        Day's High: <b>${stonk.high.toFixed(2)}</b>{" "}
      </h4>
      <h4>
        Day's Low: <b>${stonk.low.toFixed(2)}</b>
      </h4>
      <h4>
        Opening Price: <b>${stonk.open.toFixed(2)}</b>
      </h4>
    </div></div>
  );
};

export default Stonk;
