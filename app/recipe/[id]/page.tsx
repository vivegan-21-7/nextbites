import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { getRecipe, recipes } from "../../data/recipes";

export function generateStaticParams() {
  return recipes.map((recipe) => ({
    id: recipe.id,
  }));
}

type Props = {
  params: { id: string } | Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await Promise.resolve(params);
  const recipe = getRecipe(id);
  if (!recipe) {
    return {
      title: "Recipe Not Found · NextBites",
    };
  }
  return {
    title: `${recipe.title} · NextBites`,
    description:
      recipe.blurb || `Learn how to cook ${recipe.title} on NextBites.`,
  };
}

export default async function RecipePage({ params }: Props) {
  const { id } = await Promise.resolve(params);
  const recipe = getRecipe(id);

  // If the recipe ID does not match any known recipe, trigger the 404 not-found flow
  if (!recipe) {
    notFound();
  }

  return (
    <main className="detail">
      <Link href="/" className="back">
        ← Back to recipes
      </Link>

      <div className="detail-head">
        <div className="detail-art" data-cuisine={recipe.cuisine}>
          <span>{recipe.emoji}</span>
        </div>
        <div>
          <h1>{recipe.title}</h1>
          {recipe.blurb && <p className="detail-blurb">{recipe.blurb}</p>}
          <div className="card-meta">
            <span className="chip">⏱ {recipe.minutes} min</span>
            <span className="chip">{recipe.difficulty}</span>
            <span className="chip chip-cuisine">{recipe.cuisine}</span>
          </div>
        </div>
      </div>

      <div className="detail-cols">
        <section>
          <h2>Ingredients</h2>
          <ul className="ing">
            {recipe.ingredients.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2>Method</h2>
          <ol className="steps">
            {recipe.steps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </section>
      </div>
    </main>
  );
}
