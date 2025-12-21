import Link from "next/link";
import { recipes } from "@/data/recipes";

export default function Home() {
  // Sort recipes alphabetically by title (case-insensitive)
  const sortedRecipes = [...recipes].sort((a, b) =>
    a.title.localeCompare(b.title, undefined, { sensitivity: "base" })
  );

  // Split recipes into two columns
  const midpoint = Math.ceil(sortedRecipes.length / 2);
  const firstColumn = sortedRecipes.slice(0, midpoint);
  const secondColumn = sortedRecipes.slice(midpoint);

  return (
    <div className="relative min-h-screen bg-white">
      {/* Background image with opacity */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: "url('/watercolor-background.jpg')" }}
      />
      {/* Content */}
      <div className="relative px-[90px] py-[60px]">
      {/* Navigation tabs */}
      <nav className="mb-[100px]">
        <div className="flex gap-12">
          <button className="font-young-serif font-medium text-neutral-950 text-xl">
            Index
          </button>
          <button className="font-young-serif font-medium text-neutral-500 text-xl">
            Ingredients
          </button>
        </div>
      </nav>

      {/* Main heading */}
      <h1 className="font-young-serif font-medium text-neutral-800 mb-14 text-6xl">
        Index
      </h1>

      {/* Two-column recipe list */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2">
        {/* First column */}
        <div className="flex flex-col gap-y-2">
          {firstColumn.map((recipe) => (
            <Link
              key={recipe.id}
              href={`/recipe/${recipe.id}`}
              className="font-young-serif font-medium text-xl text-neutral-800 hover:text-neutral-950 transition-colors"
            >
              {recipe.title}
            </Link>
          ))}
        </div>
        {/* Second column */}
        <div className="flex flex-col gap-y-2">
          {secondColumn.map((recipe) => (
            <Link
              key={recipe.id}
              href={`/recipe/${recipe.id}`}
              className="font-young-serif font-medium text-xl text-neutral-800 hover:text-neutral-950 transition-colors"
            >
              {recipe.title}
            </Link>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
}
