import React from "react";
import { Card, Row } from "antd";

function Cards({
  currentBalance,
  income,
  expenses,
  showExpenseModal,
  showIncomeModal,
  cardStyle,
  reset,
}) {
  return (
    <Row
    style={{
      display: "flex",
      flexWrap: "wrap",
      gap: "16px",
      justifyContent: "space-between",
      padding: "0 16px",
      // Responsive adjustments
      ...(window.innerWidth <= 768 && {
        justifyContent: "center",
        gap: "12px",
      }),
      ...(window.innerWidth <= 480 && {
        flexDirection: "column",
        alignItems: "center",
        gap: "8px",
      }),
    }}
    >
      <Card bordered={true} style={cardStyle}>
        <h2>Current Balance</h2>
        <p>₹{currentBalance}</p>
        <div class="btn btn-blue" style={{ margin: 0 }} onClick={reset}>
          Reset Balance
        </div>
      </Card>

      <Card bordered={true} style={cardStyle}>
        <h2>Total Income</h2>
        <p>₹{income}</p>
        <div
          class="btn btn-blue"
          style={{ margin: 0 }}
          onClick={showIncomeModal}
        >
          Add Income
        </div>
      </Card>

      <Card bordered={true} style={cardStyle}>
        <h2>Total Expenses</h2>
        <p>₹{expenses}</p>
        <div className="btn btn-blue" onClick={showExpenseModal}>
          Add Expense
        </div>
      </Card>
    </Row>
  );
}

export default Cards;
