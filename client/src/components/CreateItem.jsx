import { useState } from 'react';
import api from '../api';
import { useNavigate } from 'react-router-dom'; // Change this import

const CreateItem = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate(); // Change this to useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post('/items', { name, description });
    navigate('/'); // Change this to use navigate
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create New Item</h2>
      <input
        type="text"
        placeholder="Item Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      ></textarea>
      <button type="submit">Add Item</button>
    </form>
  );
};

export default CreateItem;
