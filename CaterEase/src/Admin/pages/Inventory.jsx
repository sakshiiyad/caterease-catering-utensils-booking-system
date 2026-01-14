import React from 'react'
import Tabs from '../components/Tabs'
import { useState } from 'react'
import InventoryTable from './InventoryTable'
import { cateringInventory, utensilInventory } from './inventorydata'

const Inventory = () => {
    const [activeTab, setactiveTab] = useState("catering")
  return (
    <div>
        <h2 className='heading'>Inventory Managment</h2>

<Tabs activeTab={activeTab} setactiveTab={setactiveTab}/>
{activeTab==="catering" && (
<InventoryTable data={cateringInventory}/>
)}

{activeTab==="utensils" && (
<InventoryTable data={utensilInventory} />
)}



<style>
    {
        `
        .heading{
        margin:20px;
        }
        `
    }
</style>
    </div>
    
  )
}

export default Inventory