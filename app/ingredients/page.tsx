"use client";

import Link from "next/link";
import { useState } from "react";
import { ingredients, categories } from "@/data/ingredients";

export default function IngredientsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [inPantry, setInPantry] = useState(false);

  const filteredIngredients =
    selectedCategory === "All"
      ? ingredients
      : ingredients.filter((ing) => ing.category === selectedCategory);

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
              className="font-young-serif font-medium text-neutral-500 text-xl"
            >
              Index
            </Link>
            <button className="font-young-serif font-medium text-neutral-950 text-xl">
              Ingredients
            </button>
          </div>
        </nav>

        {/* Main heading */}
        <h1 className="font-young-serif font-medium text-neutral-800 mb-14 text-6xl">
          Ingredients
        </h1>

        {/* Filter section */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex gap-7">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`font-young-serif font-medium text-lg ${
                  selectedCategory === category
                    ? "text-neutral-950 underline underline-offset-[8px]"
                    : "text-neutral-500"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="in-pantry"
              checked={inPantry}
              onChange={(e) => setInPantry(e.target.checked)}
              className="w-4 h-4"
            />
            <label
              htmlFor="in-pantry"
              className="font-young-serif text-lg text-neutral-700"
            >
              In your pantry
            </label>
          </div>
        </div>

        {/* Ingredients grid */}
        <div
          className="grid justify-between gap-y-[40px] -mx-[35px]"
          style={{ gridTemplateColumns: "repeat(auto-fill, 175px)" }}
        >
          {filteredIngredients.map((ingredient) => (
            <div
              key={ingredient.id}
              className="flex flex-col items-center gap-5 w-[175px] h-[219px]"
            >
              <div className="w-[175px] h-[175px] rounded-lg flex items-center justify-center">
                {ingredient.image ? (
                  <img
                    src={ingredient.image}
                    alt={ingredient.name}
                    className="w-[175px] h-[175px] object-cover rounded-lg"
                  />
                ) : (
                  <span className="text-4xl">🍽️</span>
                )}
              </div>
              <span className="font-young-serif font-medium text-xl text-neutral-800 text-center">
                {ingredient.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

