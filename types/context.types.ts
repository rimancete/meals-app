export type FavoritesContextType = {
    favoriteMealIds: string[];
    addFavoriteMealIds: (id: string) => void;
    removeFavoriteMealIds: (id: string) => void;
}