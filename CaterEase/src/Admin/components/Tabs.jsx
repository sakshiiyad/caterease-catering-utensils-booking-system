import React from "react";

const Tabs = ({ activeTab, setactiveTab }) => {
  return (
    <>
      <div className="tabs-container">
        <button
          className={`tab-btn ${activeTab === "catering" ? "active" : ""}`}
          onClick={() => setactiveTab("catering")}
        >
          Catering Bookings
        </button>

        <button
          className={`tab-btn ${activeTab === "utensils" ? "active" : ""}`}
          onClick={() => setactiveTab("utensils")}
        >
          Utensils Bookings
        </button>
      </div>

      <style>
        {`
          .tabs-container{
            display: flex;
            gap: 12px;
            padding: 14px 20px;
            margin-top: 10px;
          }

          .tab-btn{
            padding: 10px 18px;
            border-radius: 10px;
            border: 1px solid #e5e7eb;
            background: #ffffff;
            cursor: pointer;
            font-weight: 600;
            font-size: 14px;
            transition: 0.2s ease;
          }

          .tab-btn:hover{
            background: #f3f4f6;
          }

          .tab-btn.active{
            background: #111827;
            color: #ffffff;
            border: 1px solid #111827;
          }
        `}
      </style>
    </>
  );
};

export default Tabs;
