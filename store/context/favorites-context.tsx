import React, { createContext, useState } from "react";

import { FavoritesContextType } from "types";

const defaultValue: FavoritesContextType = {
  favoriteMealIds: [],
  addFavoriteMealIds: () => {},
  removeFavoriteMealIds: () => {},
};

export const FavoritesContext =
  createContext<FavoritesContextType>(defaultValue);

interface FavoritesContextProviderProps {
  children: React.ReactNode;
}

function FavoritesContextProvider({ children }: FavoritesContextProviderProps) {
  const [favoriteMealIds, setFavoriteMealIds] = useState<
    FavoritesContextType["favoriteMealIds"]
  >(defaultValue.favoriteMealIds);
  const addFavoriteMealIds = (newId: string) =>
    setFavoriteMealIds((currentIds) => [...currentIds, newId]);
  const removeFavoriteMealIds = (id: string) =>
    setFavoriteMealIds((currentIds) =>
      currentIds.filter((currentId) => currentId !== id)
    );

  const values = {
    favoriteMealIds,
    addFavoriteMealIds,
    removeFavoriteMealIds,
  };
  return (
    <FavoritesContext.Provider
      value={values}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContextProvider;
