import React from "react";

const InventoryTable = ({ data }) => {
  return (
    <>
      <div className="inv-table-wrap">
        <table className="inv-table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Unit</th>
              <th>Status</th>
              <th colSpan={4} className="actions-head">Actions</th>
            </tr>
          </thead>

          <tbody>
            {data.length === 0 ? (
              <tr>
                <td colSpan="9" className="empty-row">
                  No inventory items found.
                </td>
              </tr>
            ) : (
              data.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td className="item-name">{item.name}</td>
                  <td>{item.quantity}</td>
                  <td>{item.unit}</td>

                  <td>
                    <span
                      className={`badge ${
                        item.status === "Available" ? "ok" : "bad"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>

                  <td>
                    <button className="btn qty-btn">+</button>
                  </td>
                  <td>
                    <button className="btn qty-btn">-</button>
                  </td>
                  <td>
                    <button className="btn stock-btn">Out of Stock</button>
                  </td>
                  <td>
                    <button className="btn del-btn">Delete</button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* ✅ CSS in same file */}
      <style>
        {`
          .inv-table-wrap{
            padding: 10px 20px;
          }

          .inv-table{
            width: 100%;
            border-collapse: collapse;
            background: #ffffff;
            border: 1px solid #e5e7eb;
            border-radius: 14px;
            overflow: hidden;
          }

          .inv-table th,
          .inv-table td{
            padding: 12px 14px;
            text-align: left;
            border-bottom: 1px solid #e5e7eb;
            font-size: 14px;
          }

          .inv-table th{
            background: #f9fafb;
            font-weight: 800;
            color: #111827;
          }

          .inv-table tr:hover td{
            background: #f8fafc;
          }

          .item-name{
            font-weight: 700;
            color: #111827;
          }

          .actions-head{
            text-align: center;
          }

          .btn{
            padding: 7px 12px;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            font-size: 12px;
            font-weight: 700;
          }

          .qty-btn{
            background: #111827;
            color: #fff;
            width: 38px;
          }

          .stock-btn{
            background: #f59e0b;
            color: #111827;
          }

          .del-btn{
            background: #dc2626;
            color: white;
          }

          .badge{
            padding: 6px 10px;
            border-radius: 999px;
            font-size: 12px;
            font-weight: 800;
            display: inline-block;
          }

          .badge.ok{
            background: #dcfce7;
            color: #166534;
          }

          .badge.bad{
            background: #fee2e2;
            color: #991b1b;
          }

          .empty-row{
            text-align: center;
            padding: 20px;
            color: #6b7280;
            font-weight: 700;
          }
        `}
      </style>
    </>
  );
};

export default InventoryTable;
