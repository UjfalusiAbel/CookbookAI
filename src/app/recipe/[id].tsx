import { View, Text, ScrollView, Pressable, AlertButton, Alert } from "react-native";
import useRecipe from "../contexts/RecipeContext";
import { Heart } from "lucide-react-native";
import { useRouter } from "expo-router";
import { useState } from "react";

export default function RecipeDetail() {
  const { selectedRecipe, removeFavorite, inFavorites, addFavorite } = useRecipe();
  const [isFavorite, setIsFavorite] = useState<boolean>(inFavorites(selectedRecipe.id));

  const handleHeartPress = async () => {
    if (!isFavorite) {
      await addFavorite(selectedRecipe);
      setIsFavorite(true);
    }
    else {
      handleRemove(selectedRecipe.id);
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

  if (!selectedRecipe) {
    return (
      <View className="flex-1 items-center justify-center bg-white">
        <Text className="text-lg text-gray-500">Recipe not found.</Text>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-white p-4">
      <View className="h-52 bg-gray-100 rounded-lg items-center justify-center mb-4 border border-green-400">
        <Text className="text-4xl">📷</Text>
      </View>

      <View className="flex-row justify-between items-center mb-2">
        <View>
          <Text className="text-xl font-semibold text-black">{selectedRecipe.title}</Text>
          <Text className="text-gray-500">{selectedRecipe.time}</Text>
        </View>
        <Pressable className="p-2" onPress={handleHeartPress}>
          {isFavorite ?
            (<Heart fill="purple" color="purple" size={20} />) :
            (<Heart fill="none" color="purple" size={20} />)}
        </Pressable>
      </View>
      
      <ScrollView>
        <Text className="text-lg font-semibold text-black mb-2">Ingredients:</Text>
        {selectedRecipe.ingredients.map((item, index) => (
          <Text key={index} className="text-gray-700 mb-1">• {item}</Text>
        ))}

        <Text className="text-lg font-semibold text-black mt-6 mb-2">Instructions:</Text>
        {selectedRecipe.instructions.map((step, index) => (
          <View key={index} className="flex-row mb-2">
            <Text className="font-semibold text-black">{index + 1}. </Text>
            <Text className="text-gray-700 flex-1">{step}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
