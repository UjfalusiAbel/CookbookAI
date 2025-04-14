import { Recipe } from "@/interfaces";
import OpenAI from "openai";


const getAiRecipes = async (search: string) => {
    const apiKey = process.env.EXPO_PUBLIC_OPENAI_API_KEY;
    const openai = new OpenAI({ apiKey: apiKey });
    const prompt = `
                    Give me 5 recipe objects about recipes for ${search} in the following JSON format:

                    interface Recipe {
                        id: string,
                        title: string,
                        time: string,
                        instructions: string[],
                        ingredients: string[]
                    }

                    Each recipe must:
                        - Have a unique id (uuid)
                        - Have a title
                        - Have an estimated cooking time
                        - Be in JSON array format (no explanation, no extra text)
                        - Include simple, readable instructions

                    Only respond with valid JSON.`;

    try {
        const response = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            response_format: { "type": "json_object" },
            messages: [
                {
                    role: "system",
                    content: "You are a helpful assistant that outputs structured JSON data.",
                },
                {
                    role: "user",
                    content: prompt,
                },
            ],
            temperature: 0.7,
        });

        const jsonOutput = response.choices[0].message?.content ?? "{}";
        const parsed = JSON.parse(jsonOutput);
        return parsed.recipes;
    } catch (error) {
        console.error("Error fetching recipes:", error);
        return null;
    }
}

export default getAiRecipes;
