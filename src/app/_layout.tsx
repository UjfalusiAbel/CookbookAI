import "../global.css";
import { Slot } from "expo-router";
import { RecipeProvider } from "./contexts/RecipeContext";

export default function Layout() {
  return (
    <RecipeProvider>
      <Slot />
    </RecipeProvider>
  );
}
