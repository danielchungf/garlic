"use client";

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

  // Manually selected ingredient images for each recipe
  const ingredientImages: Record<string, string[]> = {
    "7": [
      "/carrot.png",
      "/potato.png",
      "/cellery.png",
      "/ginger.png",
      "/red-onion.png",
      "/parsley.png",
    ],
  };

  const images = ingredientImages[recipe.id] || [];

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
            <Link
              href="/"
              className="font-young-serif font-medium text-neutral-950 text-xl"
            >
              Index
            </Link>
            <Link
              href="/ingredients"
              className="font-young-serif font-medium text-neutral-500 text-xl"
            >
              Ingredients
            </Link>
          </div>
        </nav>

        {/* Recipe title */}
        <h1 className="font-young-serif font-medium text-neutral-800 mb-10 text-6xl">
          {recipe.title}
        </h1>

        {/* Ingredient images illustration */}
        <div className="mb-10 w-full flex items-center overflow-x-auto">
          {images.length > 0 ? (
            images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt=""
                className="w-[150px] h-[150px] object-contain flex-shrink-0 -ml-[90px] first:ml-[-30px]"
              />
            ))
          ) : (
            <div className="w-full h-64 bg-neutral-100 flex items-center justify-center">
              <span className="text-8xl">🍽️</span>
            </div>
          )}
        </div>

        {/* Action buttons */}
        <div className="flex gap-14 mb-12">
          <button className="flex items-center gap-2 font-young-serif font-medium text-lg text-neutral-800">
            <span>👨‍🍳</span>
            <span>Recipe by Daniel Chung</span>
          </button>
          <button className="flex items-center gap-2 font-young-serif font-medium text-lg text-neutral-800">
            <span>🍲</span>
            <span>Mark as cooked</span>
          </button>
          <button className="flex items-center gap-2 font-young-serif font-medium text-lg text-neutral-800">
            <span>⭐</span>
            <span>Add to favorites</span>
          </button>
        </div>

        {/* Two-column layout: Ingredients and Preparation */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-[120px]">
          {/* Ingredients Section */}
          <section>
            <h2 className="font-young-serif font-medium text-neutral-800 mb-5 text-xl">
              Ingredients
            </h2>
            <ul className="space-y-1 font-source-serif text-[16px] tracking-[-0.32px] text-neutral-700">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="flex items-start">
                  <span>{ingredient}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Preparation Section */}
          <section>
            <h2 className="font-young-serif font-medium text-neutral-800 mb-5 text-xl">
              Preparation
            </h2>
            <div className="space-y-5">
              {recipe.instructions.map((instruction, index) => (
                <p
                  key={index}
                  className="font-source-serif text-neutral-700 text-[16px] tracking-[-0.32px] leading-relaxed"
                >
                  {instruction}
                </p>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
