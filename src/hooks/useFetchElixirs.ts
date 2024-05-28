// src/hooks/useFetchElixirs.ts
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Elixir, Filters } from '../types';

const useFetchElixirs = (filters: Filters) => {
  const [elixirs, setElixirs] = useState<Elixir[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchElixirs = async () => {
      setLoading(true);
      setError(null);
      const query = new URLSearchParams(filters as any).toString();
      const url = `https://wizard-world-api.herokuapp.com/Elixirs?${query}`;

      try {
        const response = await axios.get(url);
        setElixirs(response.data);
      } catch (err) {
        setError('Failed to fetch elixirs. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchElixirs();
  }, [filters]);

  return { elixirs, loading, error };
};

export default useFetchElixirs;
