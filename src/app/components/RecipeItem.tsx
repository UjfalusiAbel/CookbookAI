import { Recipe } from "@/interfaces"
import { Heart } from "lucide-react-native"
import React, { useState } from "react"
import { View, Text, Pressable, AlertButton, Alert } from "react-native"
import { useRouter } from 'expo-router';
import useRecipe from "../contexts/RecipeContext";
import { RecipeItemProps } from "@/interfaces/components";

const RecipeItem: React.FC<RecipeItemProps> = ({ item }) => {
  const router = useRouter();
  const { setSelectedRecipe, removeFavorite, inFavorites, addFavorite } = useRecipe();
  const [isFavorite, setIsFavorite] = useState<boolean>(inFavorites(item.id));

  const handleHeartPress = async () => {
    if (!isFavorite) {
      await addFavorite(item);
      setIsFavorite(true);
    }
    else {
      handleRemove(item.id);
    }
  }

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
          removeFavorite(id);
          setIsFavorite(false);
        },
      },
    ];
    const title = "Remove Favorite";
    const message = "Are you sure you want to remove this recipe from your favorites?";
    Alert.alert(title, message, buttons);
  };

  const handlePress = (recipe: Recipe) => {
    setSelectedRecipe(recipe);
    router.push(`/recipe/${recipe.id}`);
  };

  return (
    <Pressable onPress={() => handlePress(item)}>
      <View className="bg-gray-300 rounded-xl shadow-gray-400 flex-row items-center p-3 mb-4 shadow-xl">
        <View className="w-12 h-12 bg-gray-200 rounded-md mr-4 items-center justify-center">
        </View>

        <View className="flex-1">
          <Text className="font-medium text-gray-800">{item.title}</Text>
          <Text className="text-gray-500 text-sm">{item.time}</Text>
        </View>

        <Pressable className="p-2" onPress={handleHeartPress}>
          {isFavorite ?
            (<Heart fill="purple" color="purple" size={20} />) :
            (<Heart fill="none" color="purple" size={20} />)}
        </Pressable>
      </View>
    </Pressable>
  )
}

export default RecipeItem;