import { View } from "react-native"
import Searchbar from "../components/Searchbar"
import Favorites from "../components/Favorites"
import { useState } from "react"

const HomeScreen = () => {
    const [recipeSearch, setRecipeSearch] = useState<string>("");

    return (
        <View>
            <Searchbar recipeSearch={recipeSearch} setRecipeSearch={setRecipeSearch} />
            <Favorites />
        </View>
    );
}

export default HomeScreen;