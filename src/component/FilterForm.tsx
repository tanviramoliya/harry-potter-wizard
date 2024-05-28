import React, { useState } from 'react';
import { Filters } from '../types';

// Define props interface for FilterForm component
interface FilterFormProps {
  onFilter: (filters: Filters) => void; // Callback function to apply filters
}

const FilterForm: React.FC<FilterFormProps> = ({ onFilter }) => {
  // State hooks for managing form inputs
  const [name, setName] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [ingredient, setIngredient] = useState('');
  const [inventorFullName, setInventorFullName] = useState('');
  const [manufacturer, setManufacturer] = useState('');

  // Function to handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onFilter({ name, difficulty, ingredient,  inventorFullName, manufacturer });
  };

  // Function to handle form reset
  const handleReset = () => {
    setName('');
    setDifficulty('');
    setIngredient('');
    setInventorFullName('');
    setManufacturer('');
    onFilter({});
  };

  // Render JSX for FilterForm component
  return (
    <form className="filter-form" onSubmit={handleSubmit}>
      {/* Name filter input */}
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
        />
      </div>
      
      {/* Difficulty filter input */}
      <div className="form-group">
        <label htmlFor="difficulty">Difficulty</label>
        <input
          id="difficulty"
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
          type="text"
        />
      </div>
      
      {/* Ingredient filter input */}
      <div className="form-group">
        <label htmlFor="ingredient">Ingredient</label>
        <input
          id="ingredient"
          value={ingredient}
          onChange={(e) => setIngredient(e.target.value)}
          type="text"
        />
      </div>
      
      {/* Inventor Full Name filter input */}
      <div className="form-group">
        <label htmlFor="inventorFullName">Inventor Full Name</label>
        <input
          id="inventorFullName"
          value={inventorFullName}
          onChange={(e) => setInventorFullName(e.target.value)}
          type="text"
        />
      </div>
      
      {/* Manufacturer filter input */}
      <div className="form-group">
        <label htmlFor="manufacturer">Manufacturer</label>
        <input
          id="manufacturer"
          value={manufacturer}
          onChange={(e) => setManufacturer(e.target.value)}
          type="text"
        />
      </div>
      
      {/* Apply Filters button */}
      <button type="submit">Apply Filters</button>
      
      {/* Reset Filters button */}
      <button type="button" onClick={handleReset}>Reset Filters</button>
    </form>
  );
};

export default FilterForm;
