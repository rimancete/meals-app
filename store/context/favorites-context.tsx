import React, { createContext, useState } from "react";

import { FavoritesContextType } from "types";

const defaultValue: FavoritesContextType = {
  ids: [],
  addFavorite: () => {},
  removeFavorite: () => {},
};

export const FavoritesContext =
  createContext<FavoritesContextType>(defaultValue);

interface FavoritesContextProviderProps {
  children: React.ReactNode;
}

function FavoritesContextProvider({ children }: FavoritesContextProviderProps) {
  const [ids, setIds] = useState<FavoritesContextType["ids"]>(defaultValue.ids);
  const addFavorite = (newId: string) => setIds((ids) => [...ids, newId]);
  const removeFavorite = (newId: string) => setIds((ids) => [...ids, newId]);

  return (
    <FavoritesContext.Provider
      value={{
        ids,
        addFavorite,
        removeFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContextProvider;
