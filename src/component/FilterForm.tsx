import React, { useState } from 'react';
import { Filters } from '../types';

interface FilterFormProps {
  onFilter: (filters: Filters) => void;
}

const FilterForm: React.FC<FilterFormProps> = ({ onFilter }) => {
  const [name, setName] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [ingredient, setIngredient] = useState('');
  const [inventorFullName, setInventorFullName] = useState('');
  const [manufacturer, setManufacturer] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onFilter({ name, difficulty, ingredient, inventorFullName, manufacturer });
  };

  const handleReset = () => {
    setName('');
    setDifficulty('');
    setIngredient('');
    setInventorFullName('');
    setManufacturer('');
    onFilter({});
  };

  return (
    <form className="filter-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
        />
      </div>
      <div className="form-group">
        <label htmlFor="difficulty">Difficulty</label>
        <input
          id="difficulty"
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
          type="text"
        />
      </div>
      <div className="form-group">
        <label htmlFor="ingredient">Ingredient</label>
        <input
          id="ingredient"
          value={ingredient}
          onChange={(e) => setIngredient(e.target.value)}
          type="text"
        />
      </div>
      <div className="form-group">
        <label htmlFor="inventorFullName">Inventor Full Name</label>
        <input
          id="inventorFullName"
          value={inventorFullName}
          onChange={(e) => setInventorFullName(e.target.value)}
          type="text"
        />
      </div>
      <div className="form-group">
        <label htmlFor="manufacturer">Manufacturer</label>
        <input
          id="manufacturer"
          value={manufacturer}
          onChange={(e) => setManufacturer(e.target.value)}
          type="text"
        />
      </div>
      <button type="submit">Apply Filters</button>
      <button type="button" onClick={handleReset}>Reset Filters</button>
    </form>
  );
};

export default FilterForm;
