// src/components/Home.jsx
import { useEffect, useState } from 'react';
import api from '../api';
import ItemList from './ItemList';

const Home = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const response = await api.get('/items'); // Adjust endpoint accordingly
      setItems(response.data);
    };

    fetchItems();
  }, []);

  return (
    <div>
      <h2>Items List</h2>
      <ItemList items={items} />
    </div>
  );
};

export default Home;
