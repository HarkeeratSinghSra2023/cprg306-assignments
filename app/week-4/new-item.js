"use client"

import React, { useState } from "react";

function NewItem() {
    const [quantity, setQuantity] = useState(1);

    function increment() {
        setQuantity(quantity + 1);
    }

    function decrement() {
        setQuantity(quantity - 1);
    }

    return(
        <section className="flex justify-center">
        <div className="flex justify-between bg-white w-32 p-2">
            <span className="text-black">{quantity}</span>
            <div className="flex">
                <button onClick={increment} className="w-6 rounded-lg bg-blue-500 hover:bg-blue-600 disabled:bg-slate-500" disabled={quantity==20}>+</button>
                <button onClick={decrement} className="w-6 rounded-lg bg-blue-500 hover:bg-blue-600 disabled:bg-slate-500 ml-1" disabled={quantity==1}>-</button>
            </div>
        </div>
        </section>
    )
}

export default NewItem