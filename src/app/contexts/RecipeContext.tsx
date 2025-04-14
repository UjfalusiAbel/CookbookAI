import React, { createContext, useContext, useEffect, useState } from 'react';
import { Recipe } from '@/interfaces';
import { loadFavorites, saveFavorites } from '@/utils/storageFunctions';
import { RecipeContextProps } from '@/interfaces/components';

const RecipeContext = createContext<RecipeContextProps | null>(null);

export const RecipeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [favorites, setFavorites] = useState<Recipe[]>([]);
    const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
    const [aiResults, setAiResults] = useState<Recipe[] | null>(null);

    useEffect(() => {
        const getFavorites = async () => {
            const data = await loadFavorites();
            setFavorites(data);
        };
        getFavorites()
    }, []);

    const addFavorite = async (recipe: Recipe) => {
        const exists = favorites.find((r) => r.id === recipe.id);
        if (!exists) {
            const updated = [...favorites, recipe];
            await saveFavorites(updated);
        }
    }

    const removeFavorite = async (id: string) => {
        const updated = favorites.filter((r) => r.id !== id);
        await saveFavorites(updated);
    }

    const inFavorites = (id: string) => {
        const res = favorites.find((r) => r.id == id);
        return res != null;
    }

    return (
        <RecipeContext.Provider value={{ favorites, addFavorite, removeFavorite, selectedRecipe, setSelectedRecipe, inFavorites, aiResults, setAiResults }}>
            {children}
        </RecipeContext.Provider>
    );
};

const useRecipe = () => useContext(RecipeContext);

export default useRecipe;
