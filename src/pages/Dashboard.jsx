import React from "react";
import { Link } from "react-router-dom";

const Dashboard = ({ stonkData }) => {
  const borderTop = "1px solid black";
  // const borderTop = "none"

  return (
    <div className="stocks-table-container">
      <table>
        <thead>
          <tr>
            <td>Company Name</td>
            <td>Price</td>
            <td>Change</td>
          </tr>
        </thead>
        <tbody>
          {stonkData.map((stonk, i) => {
            const changeSymbol = stonk.change >= 0 ? "+" : "-";
            const changeSymbolIfNeg = stonk.change >= 0 ? "" : "-";
            const changeColor = stonk.change >= 0 ? "green" : "red";
            const percentageChange = (stonk.change / stonk.lastPrice) * 100;
            // <tr className="data-row" key={i}>
            return (
              <tr key={i}>
                <td style={{ borderTop }}>
                  <Link
                    to={`/stocks/${stonk.symbol}`}
                    style={{ textDecoration: "none" }}
                  >
                    {" "}
                    <span className="link">{stonk.name}</span>{" "}
                  </Link>
                  ({stonk.symbol})
                </td>
                <td style={{ borderTop }}>${stonk.lastPrice}</td>
                <td style={{ borderTop, color: changeColor }}>
                  <b>
                    {changeSymbolIfNeg}${Math.abs(stonk.change).toFixed(2)}
                  </b>{" "}
                  (<em>
                    {changeSymbol}
                    {Math.abs(percentageChange).toFixed(2)}%
                  </em>)
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
