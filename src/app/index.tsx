import React, { useState } from "react";
import { View, Text, FlatList, Alert, AlertButton } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import HomeScreen from "./screens/HomeScreen";


export default function Page() {
  const { top } = useSafeAreaInsets();

  return (
    <View className="flex-1 bg-[#f8f8f8]" style={{ paddingTop: top }}>
      <HomeScreen />
    </View>
  );
}
