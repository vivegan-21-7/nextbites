export type Recipe = {
  id: string;
  title: string;
  emoji: string;
  minutes: number;
  difficulty: "Easy" | "Medium" | "Hard";
  cuisine: string;
  blurb?: string;
  ingredients: string[];
  steps: string[];
};

export const recipes: Recipe[] = [
  {
    id: "margherita-pizza",
    title: "Margherita Pizza",
    emoji: "🍕",
    minutes: 35,
    difficulty: "Medium",
    cuisine: "Italian",
    blurb: "Blistered crust, San Marzano sauce, melty mozzarella, fresh basil.",
    ingredients: [
      "Pizza dough",
      "San Marzano tomato sauce",
      "Fresh mozzarella",
      "Fresh basil leaves",
      "Extra virgin olive oil",
    ],
    steps: [
      "Stretch the dough into a 12-inch round base.",
      "Spread the tomato sauce evenly across the base.",
      "Tear and scatter fresh mozzarella.",
      "Bake in a blistering hot oven until crust blisters and cheese bubbles.",
      "Top with fresh basil leaves and a drizzle of olive oil.",
    ],
  },
  {
    id: "paneer-tikka",
    title: "Paneer Tikka",
    emoji: "🧆",
    minutes: 40,
    difficulty: "Medium",
    cuisine: "Indian",
    blurb: "Smoky, spiced paneer cubes grilled with peppers and onion.",
    ingredients: [
      "250g paneer, cubed",
      "1 bell pepper & 1 onion, diced",
      "1/2 cup Greek yogurt",
      "1 tbsp ginger-garlic paste",
      "1 tbsp tikka masala & kasuri methi",
    ],
    steps: [
      "Whisk yogurt with spices, ginger-garlic paste, and lemon juice.",
      "Coat paneer, peppers, and onions in the marinade for 20 minutes.",
      "Thread onto skewers alternating paneer and vegetables.",
      "Grill or roast hot until edges are charred and fragrant.",
      "Serve hot with mint chutney and lemon wedges.",
    ],
  },
  {
    id: "cold-brew",
    title: "Cold Brew Coffee",
    emoji: "☕",
    minutes: 10,
    difficulty: "Easy",
    cuisine: "Drinks",
    blurb: "Smooth, low-acid coffee steeped slow overnight.",
    ingredients: [
      "1 cup coarsely ground coffee",
      "4 cups cold filtered water",
      "Ice cubes",
      "Milk or sweetener to taste",
    ],
    steps: [
      "Combine coarse coffee grounds and cold water in a large jar.",
      "Stir gently to make sure all grounds are saturated.",
      "Cover and steep in the fridge for 12 to 18 hours.",
      "Strain through a fine mesh sieve or paper filter.",
      "Pour over ice and serve black or with a splash of milk.",
    ],
  },
  {
    id: "veg-burger",
    title: "Veg Burger",
    emoji: "🍔",
    minutes: 30,
    difficulty: "Easy",
    cuisine: "American",
    blurb: "Crispy spiced patty, soft bun, tangy sauce, crunchy veg.",
    ingredients: [
      "2 veggie patties",
      "2 brioche burger buns",
      "Tomato slices, lettuce, and pickles",
      "2 cheddar cheese slices",
      "Tangy burger sauce or mayo",
    ],
    steps: [
      "Pan-fry or grill patties until hot and golden brown.",
      "Melt a slice of cheese on top of each patty.",
      "Toast the brioche buns until lightly golden.",
      "Spread burger sauce on both bun halves.",
      "Layer lettuce, tomato, patty, pickles, and cap with top bun.",
    ],
  },
  {
    id: "masala-fries",
    title: "Masala Fries",
    emoji: "🍟",
    minutes: 25,
    difficulty: "Easy",
    cuisine: "Snacks",
    blurb: "Golden fries tossed in chaat masala and chilli.",
    ingredients: [
      "3 large potatoes, cut into fries",
      "2 tbsp oil",
      "1 tsp chaat masala",
      "1/2 tsp red chilli powder",
      "Salt to taste and fresh chopped coriander",
    ],
    steps: [
      "Soak cut potatoes in cold water for 15 minutes, then pat dry thoroughly.",
      "Toss with oil and a pinch of salt.",
      "Bake or air-fry at 200°C (400°F) until golden and crispy.",
      "Transfer to a bowl and immediately toss with chaat masala and chilli powder.",
      "Garnish with fresh coriander and serve with ketchup.",
    ],
  },
  {
    id: "lemon-iced-tea",
    title: "Lemon Iced Tea",
    emoji: "🧋",
    minutes: 15,
    difficulty: "Easy",
    cuisine: "Drinks",
    blurb: "Bright, fizzy, lightly sweet, perfect for a hot day.",
    ingredients: [
      "2 black tea bags",
      "2 cups hot water",
      "2 tbsp honey or sugar",
      "Juice of 1 fresh lemon",
      "Ice cubes and fresh mint sprigs",
    ],
    steps: [
      "Steep tea bags in hot water for 4–5 minutes, then discard bags.",
      "Stir in honey or sugar until completely dissolved.",
      "Add freshly squeezed lemon juice and chill.",
      "Fill glasses with ice cubes and pour tea over.",
      "Garnish with lemon slices and mint leaves.",
    ],
  },
  {
    id: "chocolate-mug-cake",
    title: "Chocolate Mug Cake",
    emoji: "🍫",
    minutes: 5,
    difficulty: "Easy",
    cuisine: "Dessert",
    blurb: "Warm, gooey single-serve cake from the microwave.",
    ingredients: [
      "4 tbsp all-purpose flour",
      "2 tbsp unsweetened cocoa powder",
      "3 tbsp sugar",
      "1/4 tsp baking powder",
      "3 tbsp milk & 2 tbsp melted butter",
      "1 tbsp chocolate chips",
    ],
    steps: [
      "Whisk dry ingredients directly inside a microwave-safe mug.",
      "Add milk and melted butter; mix until a smooth batter forms.",
      "Drop chocolate chips into the center of the batter.",
      "Microwave on high for 70 to 90 seconds.",
      "Let cool for 1 minute and enjoy warm.",
    ],
  },
  {
    id: "greek-salad",
    title: "Greek Salad",
    emoji: "🥗",
    minutes: 15,
    difficulty: "Easy",
    cuisine: "Mediterranean",
    blurb: "Crisp cucumber, tomato, olives and feta in olive oil.",
    ingredients: [
      "2 ripe tomatoes, chopped",
      "1 English cucumber, sliced",
      "1/2 red onion, thinly sliced",
      "1/2 cup Kalamata olives",
      "100g block feta cheese",
      "Extra virgin olive oil, dried oregano, lemon juice",
    ],
    steps: [
      "Combine tomatoes, cucumber, red onion, and olives in a shallow bowl.",
      "Place the feta cheese slab or cubes on top.",
      "Drizzle generously with extra virgin olive oil and a squeeze of lemon juice.",
      "Season with dried oregano and freshly cracked black pepper.",
      "Toss gently just before serving with crusty bread.",
    ],
  },
];

export function getRecipe(id: string): Recipe | undefined {
  return recipes.find((recipe) => recipe.id === id);
}
