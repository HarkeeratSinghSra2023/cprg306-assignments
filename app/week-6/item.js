import React from "react";

function Item({name, quantity, category}) {
    return(
        <section className="bg-slate-900 m-4 max-w-sm">
            <h2 className="text-2xl font-bold">{name}</h2>
            <p>Buy {quantity} in {category}</p>
        </section>
    )
}

export default Item