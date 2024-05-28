// src/components/ElixirList.tsx
import React from 'react';
import { Elixir } from '../types';
import ElixirItem from './ElixirItem';

interface ElixirListProps {
  elixirs: Elixir[];
}

const ElixirList: React.FC<ElixirListProps> = ({ elixirs }) => (
  <div className="elixir-list">
    {elixirs.map(elixir => (
      <ElixirItem key={elixir.id} elixir={elixir} />
    ))}
  </div>
);

export default ElixirList;
