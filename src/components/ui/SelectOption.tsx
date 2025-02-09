"use client";

import { useState } from "react";

const categories = [
    { name: "Aksiyalar", icon: "🎯" },
    { name: "Smartfonlar va Aksasuarlar", icon: "📱" },
    { name: "Kiryuvish mashinalari", icon: "🛁" },
    { name: "Telivizorlar", icon: "📺" },
    { name: "Kondetsionerlar", icon: "❄️" },
    { name: "Kompyuter va jihozlari", icon: "💻" },
    { name: "Muzlatgichlar", icon: "🧊" },
    { name: "Chang yutgichlar", icon: "🌀" },
];

export default function CategorySelect() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(categories[0]);

    return (
        <div className="relative w-[160px]">
            <button onClick={() => setIsOpen(!isOpen)} className="w-full flex justify-between items-center bg-blue-600 text-white px-4 py-2 rounded-lg">
                <span>{selectedCategory.icon} {selectedCategory.name}</span>
            </button>
            {isOpen && (
                <ul className="absolute mt-2 w-[313px] bg-white shadow-lg rounded-lg border border-gray-200 overflow-hidden">
                    {categories.map((category, index) => (
                        <li key={index} className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => { setSelectedCategory(category); setIsOpen(false) }}>
                            <span className="text-lg">{category.icon}</span>
                            <span>{category.name}</span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
