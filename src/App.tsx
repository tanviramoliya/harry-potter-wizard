import React, { useState } from 'react';
import useFetchElixirs from './hooks/useFetchElixirs';
import { Filters } from './types';
import './App.css';
import FilterForm from './component/FilterForm';
import LoadingSpinner from './component/LoadingSpinner';
import ElixirList from './component/ElixirList';

const App: React.FC = () => {
  const [filters, setFilters] = useState<Filters>({});
  const { elixirs, loading, error } = useFetchElixirs(filters);

  const handleFilter = (newFilters: Filters) => {
    setFilters(newFilters);
  };

  return (
    <div className="app">
      <h1>Harry Potter Elixirs</h1>
      <FilterForm onFilter={handleFilter} />
      {loading && <LoadingSpinner />}
      {error && <p className="error">{error}</p>}
      {!loading && !error && <ElixirList elixirs={elixirs} />}
    </div>
  );
};

export default App;
