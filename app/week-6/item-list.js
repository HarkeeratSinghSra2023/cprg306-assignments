'use client'
import React, { useState } from "react";
import Item from './item'
import items from './item.json'

function ItemList() {
    
    const [sortBy, setSortBy] = useState("name");

    const sortItems = [...items].sort((a,b) => {
        if (sortBy === "name") {
            if (a.name > b.name) return 1;
            if (a.name < b.name) return -1;
            return 0;
        } else if (sortBy === "category") {
            if (a.category > b.category) return 1;
            if (a.category < b.category) return -1;
            return 0;
        }
        return 0;
    })
    return(
        <section>
            <div className="flex gap-5 items-center">
                <p>Sort By: </p>
                <button
                className={` p-2 ${sortBy == "name" ? "bg-orange-700" : "bg-orange-500"}`}
                onClick={() => setSortBy("name")}>
                   Sort By Name
                </button>
                <button
                className={` p-2 ${sortBy == "category" ? "bg-orange-700" : "bg-orange-500"}`}
                onClick={() => setSortBy("category")}>
                    Sort By Category
                </button>
            </div>
            {sortItems.map((item) => (
                <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />
            ))}
        </section>
    );
}

export default ItemList