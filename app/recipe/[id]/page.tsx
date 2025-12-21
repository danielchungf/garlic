import Link from "next/link";
import { recipes } from "@/data/recipes";
import { notFound } from "next/navigation";

interface RecipePageProps {
  params: {
    id: string;
  };
}

export default function RecipePage({ params }: RecipePageProps) {
  const recipe = recipes.find((r) => r.id === params.id);

  if (!recipe) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Link
          href="/"
          className="inline-flex items-center text-amber-700 hover:text-amber-800 mb-6 transition-colors"
        >
          ← Back to recipes
        </Link>

        <article className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="h-64 bg-gradient-to-br from-amber-200 to-orange-300 flex items-center justify-center">
            {recipe.image ? (
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-8xl">🍽️</span>
            )}
          </div>

          <div className="p-8">
            <header className="mb-6">
              <h1 className="text-4xl font-bold text-gray-900 mb-3">
                {recipe.title}
              </h1>
              <p className="text-xl text-gray-600 mb-4">
                {recipe.description}
              </p>
              <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                <span className="flex items-center gap-1">
                  <span>⏱️</span>
                  <span>Prep: {recipe.prepTime}</span>
                </span>
                <span className="flex items-center gap-1">
                  <span>🔥</span>
                  <span>Cook: {recipe.cookTime}</span>
                </span>
                <span className="flex items-center gap-1">
                  <span>👥</span>
                  <span>{recipe.servings} servings</span>
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {recipe.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-sm bg-amber-100 text-amber-800 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </header>

            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-amber-200">
                  Ingredients
                </h2>
                <ul className="space-y-2">
                  {recipe.ingredients.map((ingredient, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-gray-700"
                    >
                      <span className="text-amber-600 mt-1">•</span>
                      <span>{ingredient}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-amber-200">
                  Instructions
                </h2>
                <ol className="space-y-4">
                  {recipe.instructions.map((instruction, index) => (
                    <li
                      key={index}
                      className="flex gap-3 text-gray-700"
                    >
                      <span className="flex-shrink-0 w-8 h-8 bg-amber-100 text-amber-800 rounded-full flex items-center justify-center font-semibold">
                        {index + 1}
                      </span>
                      <span className="flex-grow pt-1">{instruction}</span>
                    </li>
                  ))}
                </ol>
              </section>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}

