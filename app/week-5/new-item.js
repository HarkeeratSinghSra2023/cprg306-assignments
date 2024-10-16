"use client"

import React, { useState } from "react";

function NewItem() {
    const [name, setName] = useState(" ");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("Produce");

    function increment() {
        setQuantity(quantity + 1);
    }

    function decrement() {
        setQuantity(quantity - 1);
    }

    function handleSubmit(event) {
        event.preventDefault();
        const item = { name, quantity, category };
        console.log(item);
        alert(`Name: ${name}, quantity: ${quantity}, category: ${category}`);
        setName("");
        setQuantity(1);
        setCategory("Produce");
    }

    return(
        <section className="flex justify-center">
        <form onSubmit={(e) => handleSubmit(e)} className="p-3 mt-4 bg-slate-900 text-black max-w-sm w-full rounded-lg">
            <input
            type="text"
            placeholder="Enter item"
            className="rounded-md mb-4 w-full text-xl"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            />
            <div className="flex justify-between">
            <div className="flex justify-between bg-white w-36 rounded-lg p-3">
                <span className="text-black">{quantity}</span>
                <div className="flex">
                    <button type="button" onClick={increment} className="w-6 rounded-lg bg-blue-500 hover:bg-blue-600 disabled:bg-slate-500" disabled={quantity==20}>+</button>
                    <button type="button" onClick={decrement} className="w-6 rounded-lg bg-blue-500 hover:bg-blue-600 disabled:bg-slate-500 ml-1" disabled={quantity==1}>-</button>
                </div>
            </div>
            <select onChange={(e) => setCategory(e.target.value)}>
                <option value="Produce">Produce</option>
                <option value="Dairy">Dairy</option>
                <option value="Bakery">Bakery</option>
                <option value="Meat">Meat</option>
                <option value="Frozen Foods">Frozen Foods</option>
                <option value="Canned Goods">Canned Goods</option>
                <option value="Dry Goods">Dry Goods</option>
                <option value="Beverages">Beverages</option>
                <option value="Snacks">Snacks</option>
                <option value="Household">Household</option>
                <option value="other">Other</option>
            </select>
            </div>
            <button type="submit" className="text-white bg-blue-600 hover:bg-blue-800 w-full mt-3 rounded-lg">+</button>
        </form>
        </section>
    )
}

export default NewItem