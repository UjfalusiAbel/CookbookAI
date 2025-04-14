import { Alert, AlertButton, FlatList, Text, View } from "react-native"
import RecipeItem from "./RecipeItem"
import { useState } from "react";
import { Recipe } from "@/interfaces";
import { mockFavorites } from "@/constants";

const Favorites = () => {
    const [favorites, setFavorites] = useState<Recipe[]>(mockFavorites);
    const handleRemove = (id: string) => {
        const buttons: AlertButton[] = [
            {
                text: "Cancel",
                style: "cancel",
            },
            {
                text: "Remove",
                style: "destructive",
                onPress: () => {
                    const updated = favorites.filter((item) => item.id !== id);
                    setFavorites(updated);
                },
            },
        ];
        const title = "Remove Favorite";
        const message = "Are you sure you want to remove this recipe from your favorites?";

        Alert.alert(title, message, buttons);
    };

    return (
        <View>
            <Text className="px-4 mt-6 text-xl font-bold text-black">Favorites</Text>
            <FlatList className="px-4 mt-4" data={favorites} keyExtractor={(item) => item.id} contentContainerStyle={{ paddingBottom: 40 }}
                renderItem={({ item }) => (
                    <RecipeItem item={item} onPressHeart={handleRemove} />
                )}
            />
        </View>);
}

export default Favorites;