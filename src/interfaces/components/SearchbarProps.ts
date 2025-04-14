export interface SearchbarProps {
    recipeSearch: string;
    setRecipeSearch: (text: string) => void;
    onSearch: () => void;
    showClear: boolean;
    onClear: () => void;
}

export default SearchbarProps;