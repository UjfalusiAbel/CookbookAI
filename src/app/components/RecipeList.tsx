import { Alert, AlertButton, FlatList, Text, View } from "react-native"
import RecipeItem from "./RecipeItem"
import React, { useState } from "react";
import { Recipe } from "@/interfaces";
import { mockFavorites } from "@/constants";
import useRecipe from "../contexts/RecipeContext";
import { RecipeListProps } from "@/interfaces/components";

const RecipeList: React.FC<RecipeListProps> = ({ header, data }) => {
    return (
        <View>
            <Text className="px-4 mt-6 text-xl font-bold text-black">{header}</Text>
            <FlatList className="px-4 mt-4" data={data} keyExtractor={(item) => item.id} contentContainerStyle={{ paddingBottom: 40 }}
                renderItem={({ item }) => (
                    <RecipeItem item={item} />
                )}
            />
        </View>);
}

export default RecipeList;