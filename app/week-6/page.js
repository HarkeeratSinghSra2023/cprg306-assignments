import React from "react";
import ItemList from "./item-list";

function Page() {
    return(
        <section className="bg-slate-960">
            <h1 className="text-3xl font-bold m-4">Shopping List</h1>
            <ItemList />
        </section>
    );
}

export default Page