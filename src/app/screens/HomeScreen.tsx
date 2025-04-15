import { ActivityIndicator, FlatList, Pressable, Text, View } from "react-native"
import Searchbar from "../components/Searchbar"
import RecipeList from "../components/RecipeList"
import { useState } from "react"
import { Recipe } from "@/interfaces"
import getAiRecipes from "@/utils/getAiRecipes"
import RecipeItem from "../components/RecipeItem"
import useRecipe from "../contexts/RecipeContext"

const HomeScreen = () => {
    const [recipeSearch, setRecipeSearch] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const { favorites, aiResults, setAiResults } = useRecipe();

    const handleSearch = async () => {
        setIsLoading(true);
        setAiResults(null);
        try {
            const recipes = await getAiRecipes(recipeSearch);
            setAiResults(recipes);
        } catch (error) {
            console.error("Failed to get recipes", error);
        }
        setIsLoading(false);
    };

    const clearSearch = () => {
        setRecipeSearch("");
        setAiResults(null);
    }

    const restartSearch = async () => {
        setIsLoading(true);
        setRecipeSearch(recipeSearch);
        setAiResults(null);
        try {
            const recipes = await getAiRecipes(recipeSearch);
            setAiResults(recipes);
        } catch (error) {
            console.error("Failed to get recipes", error);
        }
        setIsLoading(false);
    };

    return (
        <View className="flex-1 bg-[#f8f8f8]">
            <Searchbar recipeSearch={recipeSearch} setRecipeSearch={setRecipeSearch} onSearch={handleSearch} showClear={!!aiResults || !!isLoading} onClear={clearSearch} />

            {isLoading ? (
                <View className="flex-1 justify-center items-center mt-10">
                    <ActivityIndicator size="large" color="#666" />
                    <Text className="text-gray-500 mt-4">Loading recipes...</Text>
                </View>
            ) : aiResults ? (
                <View>
                    <RecipeList header="Suggested recipes" data={aiResults} />
                    <Pressable className="bg-purple-700 px-4 py-3 rounded-xl mt-6 items-center" onPress={restartSearch}>
                        <Text className="text-white font-semibold">I don't like these</Text>
                    </Pressable>
                </View>
            ) : (
                <RecipeList header="Favorites" data={favorites} />
            )}
        </View>
    );
}

export default HomeScreen;