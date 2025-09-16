import React, { createContext, useCallback, useContext, useState } from 'react';

const DataContext = createContext();

export function DataProvider({ children }) {
  const [items, setItems] = useState([]);

  const fetchItems = useCallback(async (options = {}) => {
    const { signal } = options;
    try {
      const res = await fetch('http://localhost:4001/api/items?limit=500', { signal }); // Intentional bug: backend ignores limit
      const json = await res.json();
      setItems(json);
    } catch (err) {
      if (err && err.name === 'AbortError') {
        return;
      }
      throw err;
    }
  }, []);

  return (
    <DataContext.Provider value={{ items, fetchItems }}>
      {children}
    </DataContext.Provider>
  );
}

export const useData = () => useContext(DataContext);