import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddItem from './additem';
import UpdateItem from './itemupdate';
import RemoveItem from './remove';
import DisplayByCategory from './ItemDisplayByCTRGY';
import DisplayAllItems from './itemdisplay';
import SearchItem from './itemsearch';
import SortItems from './itemsort';
import LowStockItems from './lowstock';
import Layout from './Layout'; 
import './App.css';

const App = () => {
  const [items, setItems] = useState([]);

  const addItem = (newItem) => setItems([...items, newItem]);

  const removeItem = (id) => {
    const itemExists = items.find((item) => item.id === id);
    if (itemExists) {
      setItems(items.filter((item) => item.id !== id));
      return true;
    }
    return false;
  };

  const updateItem = (id, field, newValue) => {
    const itemIndex = items.findIndex((item) => item.id === id);
    if (itemIndex > -1) {
      const updatedItems = [...items];
      // Update the specific field (either 'stock' or 'price')
      updatedItems[itemIndex][field] = newValue;
      setItems(updatedItems);
      return true;
    }
    return false;
  };
  

  return (
    <Router>
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<dashboard />} /> 
      <Route path="/add-item" element={<AddItem addItem={addItem} items={items} />} />
      <Route path="/update-item" element={<UpdateItem updateItem={updateItem} items={items} />} />
      <Route path="/remove-item" element={<RemoveItem removeItem={removeItem} />} />
      <Route path="/display-all-items" element={<DisplayAllItems items={items} />} />
      <Route path="/display-items-category" element={<DisplayByCategory items={items} />} />
      <Route path="/search-item" element={<SearchItem items={items} />} />
      <Route path="/sort-items" element={<SortItems items={items} />} />
      <Route path="/low-stock-items" element={<LowStockItems items={items} />} />
    </Route>
  </Routes>
</Router>
  );
};

export default App;