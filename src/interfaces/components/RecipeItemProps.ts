import Recipe from "../Recipe";

interface RecipeItemProps {
  item:Recipe,
  onPressHeart: (id: string) => void
}

export default RecipeItemProps;
