# 🍳 CookbookAI

An AI-powered recipe app built with **React Native**, **Expo Router**, and **NativeWind (Tailwind CSS)**. Get custom recipe suggestions from OpenAI and manage your favorite meals effortlessly.

## Features

- Search for recipes based on your cravings (powered by OpenAI)
- Save and view favorite recipes locally
- Seamlessly switch between suggestions and favorites
- Smart interface using `useContext` to manage state across screens
- Styled using Tailwind classes via NativeWind
- Fast navigation with Expo Router

---

## Tech Stack

- **Expo + React Native**
- **Expo Router** for routing/navigation
- **NativeWind** for Tailwind-like styling
- **OpenAI API** for generating recipe content
- **AsyncStorage** for local persistence of favorites

---

## Getting Started

### 1. Clone this repo

```sh
git clone https://github.com/your-username/cookbook-ai.git
cd cookbook-ai
```
### 2. Install dependencies

```sh
npm install
```

### 3. Set up a .env file for project

```sh
EXPO_PUBLIC_OPENAI_API_KEY=your_openai_key_here
```

### 4. Run the app

```sh
npx expo start
```

