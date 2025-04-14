export interface SearchbarProps {
    recipeSearch: string;
    setRecipeSearch: (text: string) => void;
    onSearch: () => void;
}

export default SearchbarProps;