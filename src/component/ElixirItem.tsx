import React from 'react';
import { Elixir } from '../types';

interface ElixirItemProps {
  elixir: Elixir;
}

const ElixirItem: React.FC<ElixirItemProps> = ({ elixir }) => (
  <div className="elixir-item">
    <h2>{elixir.name}</h2>
    <p><strong>Effect:</strong> {elixir.effect}</p>
    <p><strong>Side Effects:</strong> {elixir.sideEffects || 'N/A'}</p>
    <p><strong>Characteristics:</strong> {elixir.characteristics || 'N/A'}</p>
    <p><strong>Time:</strong> {elixir.time || 'N/A'}</p>
    <p><strong>Difficulty:</strong> {elixir.difficulty}</p>
    <p><strong>Ingredients:</strong> {elixir.ingredients.map(ingredient => ingredient.name).join(', ')}</p>
    <p><strong>Inventors:</strong> {elixir.inventors.map(inventor => `${inventor.firstName} ${inventor.lastName}`).join(', ') || 'N/A'}</p>
    <p><strong>Manufacturer:</strong> {elixir.manufacturer || 'N/A'}</p>
  </div>
);

export default ElixirItem;
