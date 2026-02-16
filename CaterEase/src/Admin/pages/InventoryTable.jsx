import React, { useEffect, useState } from "react";
import { getToken } from "../../utils/auth";
import { toast } from "react-toastify";

const InventoryTable = ({ data, setInventory }) => {

console.log("areee momo",data);
  const token=getToken();
  const delethandler=async(id)=>{
  try{
      
    const res=await fetch( `http://localhost:5000/api/inventory/${id}`,{
      method:"DELETE",
      headers:{"content-Type":"application/json",
        Authorization:`${token}`,

      },
    })
      const data=await res.json();
      if(!data.success){
        return toast.error("Something went wrong")
      }
       
    setInventory(prev =>
      prev.filter(item => item._id !== id)
    );
      return toast.success("Inventory deleted Successfully")

  }catch(error){
    console.log(error);
    return toast.error("Server error")

  }
      
    }


// <-------handiing updation of qunatity----->
  const updateQty=async(id,action)=>{
    try{
     
      const res=await fetch(`http://localhost:5000/api/inventory/${id}`,{
        method:"PATCH",
        headers:{"content-Type":"application/json",
          Authorization:`${token}`
        },
        body:JSON.stringify({
          action
        })
      })
      const data=await res.json();
      console.log(data)
      if(!data.success){
        return toast.error(data.message);
      }
      setInventory(prev =>
      prev.map(item =>
        item._id === id ? data.inventoryItem : item
      )
    );

    }catch(error){
      console.log(error);
    }

  }

  // <-----handling outofstock update----->
  const updateOUSstatus=async(id,currentStatus)=>{
     const action=currentStatus==="Available"?"outofstock":"makeAvailable";
    const res=await fetch(`/api/inventory/${id}`,{
      method:"PATCH",
      headers:{"content-Type":"application/json",
        Authorization:`${token}`,
      },
      body:JSON.stringify({
        action
      })

    })
    const data=await res.json();
    console.log(data);
    setInventory(prev =>
      prev.map(item =>
        item._id === id ? data.inventoryItem : item
      ))
  }
  




  return (
    <>
      <div className="inv-table-wrap">
        <table className="inv-table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>AvailableQuantity</th>
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
                <tr key={item._id}>
                  <td>{item.InventoryId}</td>
                  <td className="item-name">{item.name}</td>
                  <td>{item.totalQuantity}</td>
                  <td>{item.availableQuantity}</td>
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
                    <button 
                    onClick={()=>updateQty(item._id,"increase")}
                    
                    className="btn qty-btn">+</button>
                  </td>
                  <td>
                    <button className="btn qty-btn"onClick={()=>updateQty(item._id,"decrease")}
                    >-</button>
                  </td>
                  <td>
                    <button className="btn stock-btn"
                    onClick={()=>updateOUSstatus(item._id,item.status)}
                    >{item.status==="Available"?"Out of Stock":"Available"}</button>
                  </td>
                  <td>
                    <button onClick={()=>delethandler(item._id)}
                     className="btn del-btn">Delete</button>
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
