"use client"

import React, { useState, useEffect } from 'react';

async function fetchMealIdeas(ingredient) {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const data = await response.json();
    return data.meals;
}

function MealIdeas({ ingredient }) {
    const [meals, setMeals] = useState([]);


    async function loadMealIdeas() {
        const mealIdeas = await fetchMealIdeas(ingredient);
        if (mealIdeas) {
            const mealArray = mealIdeas.map(mealIdea => mealIdea.strMeal);
            setMeals([...mealArray]);
        } else {
            setMeals([]);
        }
    }

        useEffect(() => {
            loadMealIdeas(ingredient)}, [ingredient]);

        return (
            <div>
                <h1>Meal Ideas</h1>
                {meals.length > 0 ? (
                    <div>
                        <p>Here are some meal ideas using {ingredient}:</p>
                        <ul>
                            {meals.map((meal, index) => (
                                <li key={index} className="list-none bg-slate-900 m-1 p-1 max-w-sm hover:bg-orange-700">{meal}</li>
                            ))}
                        </ul>
                    </div>
            ) : <p>No meal ideas found for {ingredient}</p>}
            </div>
        )
    }
export default MealIdeas;