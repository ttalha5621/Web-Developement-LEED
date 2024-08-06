import React from "react";

export default function Category({ finalCategory, setCatName }) {
    let cat = finalCategory.map((v, i) => {
        return (
            <li
                onClick={() => setCatName(v.name)}
                key={i}
                className="bg-[#ccc] cursor-pointer text-[18px] font-serif font-semibold mb-2 p-[7px]"
            >
                {v.name}
            </li>
        );
    });
    return (
        <div>
            <h3 className="text-[25px] font-bold p-[10px]">Product Category</h3>
            <ul>{cat}</ul>
        </div>
    );
}
