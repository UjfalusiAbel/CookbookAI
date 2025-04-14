import { RecipeItemProps } from "@/interfaces"
import { Heart } from "lucide-react-native"
import React from "react"
import { View, Text, Pressable } from "react-native"

const RecipeItem:React.FC<RecipeItemProps> = ({ item, onPressHeart }) => {
  return (
    <View className="bg-gray-300 rounded-xl shadow-gray-400 flex-row items-center p-3 mb-4 shadow-xl">
      <View className="w-12 h-12 bg-gray-200 rounded-md mr-4 items-center justify-center">
        <Text className="text-gray-400 text-xs">📷</Text>
      </View>

      <View className="flex-1">
        <Text className="font-medium text-gray-800">{item.title}</Text>
        <Text className="text-gray-500 text-sm">{item.time}</Text>
      </View>

      <Pressable className="p-2" onPress={() => onPressHeart(item.id)}>
        <Heart fill="purple" color="purple" size={20} />
      </Pressable>
    </View>
  )
}

export default RecipeItem;