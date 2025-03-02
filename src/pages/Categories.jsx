import React, { useState } from 'react';

function Categories() {
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState('');

  const handleAddCategory = () => {
    setCategories([...categories, newCategory]);
    setNewCategory('');
  };

  const handleDeleteCategory = (index) => {
    setCategories(categories.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1>Categories</h1>
      <div>
        <input
          type="text"
          placeholder="New Category"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
        />
        <button onClick={handleAddCategory}>Add Category</button>
      </div>
      <ul>
        {categories.map((category, index) => (
          <li key={index}>
            {category}
            <button onClick={() => handleDeleteCategory(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
