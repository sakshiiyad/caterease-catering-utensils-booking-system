import React from "react";
import Tabs from "../components/Tabs";
import { useState, useEffect } from "react";
import InventoryTable from "./InventoryTable";
import { getToken } from "../../utils/auth";
import { toast } from "react-toastify";

const Inventory = () => {
  const [activeTab, setactiveTab] = useState("catering");
  const [cateringInventory, setcateringInventory] = useState([]);
  const [utensilInventory, setutensilInventory] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [itemName, setitemName] = useState("");
  const [quantity, setQuantity] = useState("");

  const token = getToken();

  // <------------Handling addition of Inventory------->
  const addHandler = async (e) => {
    try {
      e.preventDefault();
      console.log(itemName);
      console.log(quantity);
      if (!itemName || !quantity) {
        return toast.warn("All fields are required");
      }

      const res = await fetch(`http://localhost:5000/api/inventory/add`, {
        method: "POST",
        headers: {
          "content-Type": "application/json",
          Authorization: `${token}`,
        },
        body: JSON.stringify({
          name: itemName,
          totalQuantity: quantity,
          Inventorytype: activeTab === "catering" ? "catering" : "utensils",
        }),
      });
      const data = await res.json();
      console.log(data);
      console.log("InventoryTable data:", data, typeof data);

      if (!data.success) {
        return toast.error("Something went wrong");
      }
      activeTab === "catering"
        ? setcateringInventory((prev) => [...prev, data.inventoryItem])
        : setutensilInventory((prev) => [...prev, data.inventoryItem]);

      setitemName("");
      setQuantity("");
      console.log(cateringInventory);
    } catch (error) {
      return toast.error("server error");
    }
  };

  // <-------Rendering All the Inventory----------->
  useEffect(() => {
  const renderInventory = async () => {
    try {
      const res = await fetch(`/api/inventory`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
      });

      const data = await res.json();
      console.log(data.inventoryItems);

      if (!data.success) {
        return toast.error("Something went wrong");
      }

      const cateringItems = data.inventoryItems.filter(
        (item) => item.Inventorytype === "catering"
      );

      const utensilItems = data.inventoryItems.filter(
        (item) => item.Inventorytype === "utensils"
      );

      setcateringInventory(cateringItems);
      setutensilInventory(utensilItems);

    } catch (error) {
      toast.error("Server error");
    }
  };

  renderInventory();
}, [token]);


  return (
    <div>
      <h2 className="heading">Inventory Managment</h2>

      <div className="tab-row">
        <Tabs activeTab={activeTab} setactiveTab={setactiveTab} />
        <button className="btn-style" onClick={() => setShowModal(true)}>
          Add Item
        </button>
      </div>

      {activeTab === "catering" && (
        <InventoryTable
          data={cateringInventory}
          setInventory={setcateringInventory}
        />
      )}

      {activeTab === "utensils" && (
        <InventoryTable
          data={utensilInventory}
          setInventory={setutensilInventory}
        />
      )}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h3>Add Inventory Item</h3>
              <span className="close" onClick={() => setShowModal(false)}>
                ×
              </span>
            </div>

            <form onSubmit={addHandler} className="modal-form">
              <input
                type="text"
                placeholder="Item Name"
                value={itemName}
                onChange={(e) => setitemName(e.target.value)}
              />
              <input
                type="number"
                placeholder="Quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />

              <div className="modal-actions">
                <button
                  type="button"
                  className="cancel-btn"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
                <button type="submit" className="add-btn">
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <style>
        {`
  .heading{
    margin:20px;
  }

  .tab-row{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 20px;
  }

  .btn-style{
    background-color: #22c55e;
    color: white;
    border: none;
    padding: 8px 14px;
    border-radius: 6px;
    cursor: pointer;
  }
    .modal-overlay{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal{
  background: white;
  width: 400px;
  border-radius: 8px;
  padding: 20px;
}

.modal-header{
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.close{
  cursor: pointer;
  font-size: 22px;
}

.modal-form{
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 15px;
}

.modal-form input{
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #ccc;
}

.modal-actions{
  display: flex;
  justify-content: flex-end;
  gap: 14px;
}
  .cancel-btn{
  background-color: red;
  color:white;
  padding:7px ;
  font-size:12px;
  border-radius:5px;
  }
  .add-btn{
  background-color: green;
  color:white;
  padding:7px ;
  font-size:12px;
  border-radius:5px;
  }
 

`}
      </style>
    </div>
  );
};

export default Inventory;
