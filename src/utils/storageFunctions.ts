
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Recipe } from '@/interfaces';

const key = 'favorites';

const loadFavorites = async (): Promise<Recipe[]> => {
    const data = await AsyncStorage.getItem(key);
    return data ? JSON.parse(data) : [];
};

const saveFavorites = async (recipes: Recipe[]) => {
    await AsyncStorage.setItem(key, JSON.stringify(recipes));
};

export { loadFavorites, saveFavorites }
