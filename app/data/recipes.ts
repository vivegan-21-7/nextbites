export type Recipe = {
  id: string;
  title: string;
  emoji: string;
  minutes: number;
  difficulty: "Easy" | "Medium" | "Hard";
  cuisine: string;
};

export const recipes: Recipe[] = [
  {
    id: "margherita-pizza",
    title: "Margherita Pizza",
    emoji: "🍕",
    minutes: 35,
    difficulty: "Medium",
    cuisine: "Italian",
  },
  {
    id: "paneer-tikka",
    title: "Paneer Tikka",
    emoji: "🧆",
    minutes: 40,
    difficulty: "Medium",
    cuisine: "Indian",
  },
  {
    id: "cold-brew",
    title: "Cold Brew Coffee",
    emoji: "☕",
    minutes: 10,
    difficulty: "Easy",
    cuisine: "Drinks",
  },
  {
    id: "veg-burger",
    title: "Veg Burger",
    emoji: "🍔",
    minutes: 30,
    difficulty: "Easy",
    cuisine: "American",
  },
  {
    id: "masala-fries",
    title: "Masala Fries",
    emoji: "🍟",
    minutes: 25,
    difficulty: "Easy",
    cuisine: "Snacks",
  },
  {
    id: "lemon-iced-tea",
    title: "Lemon Iced Tea",
    emoji: "🧋",
    minutes: 15,
    difficulty: "Easy",
    cuisine: "Drinks",
  },
  {
    id: "chocolate-mug-cake",
    title: "Chocolate Mug Cake",
    emoji: "🍫",
    minutes: 5,
    difficulty: "Easy",
    cuisine: "Dessert",
  },
  {
    id: "greek-salad",
    title: "Greek Salad",
    emoji: "🥗",
    minutes: 15,
    difficulty: "Easy",
    cuisine: "Mediterranean",
  },
];
