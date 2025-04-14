import { Pressable, Text, TextInput, View } from "react-native";
import { SearchbarProps } from "@/interfaces/components";
import { Search } from "lucide-react-native";

const Searchbar: React.FC<SearchbarProps> = ({ recipeSearch, setRecipeSearch }) => {
    const handleSearch = () => {
        console.log("Searching for:", recipeSearch);

    };
    return (
        <View className="px-4 mt-4">
            <View className="bg-white rounded-full px-4 py-2 flex-row items-center shadow-sm">
                <TextInput className="flex-1 text-base" placeholder="What do you feel like eating?" placeholderTextColor="#999" value={recipeSearch} onChangeText={setRecipeSearch} />
                <Pressable onPress={handleSearch}>
                    <Search color="#999" size={20} />
                </Pressable>
            </View>
        </View>
    )
}

export default Searchbar;