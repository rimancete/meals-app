export type FavoritesContextType = {
    ids: string[];
    addFavorite: (id: string) => void;
    removeFavorite: (id: string) => void;
}