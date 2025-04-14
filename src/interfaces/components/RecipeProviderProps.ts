import Recipe from "../Recipe";

interface RecipeContextProps {
    favorites: Recipe[];
    addFavorite: (recipe: Recipe) => void;
    removeFavorite: (id: string) => void;
    selectedRecipe: Recipe;
    setSelectedRecipe: (recipe: Recipe) => void;
    inFavorites: (id: string) => boolean,
    aiResults: Recipe[],
    setAiResults: (results: Recipe[]) => void,
}

export default RecipeContextProps;