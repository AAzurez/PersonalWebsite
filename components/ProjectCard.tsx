"use client"
import { useState } from "react";

export default function ProjectCard() {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      onClick={() => setFlipped(!flipped)}
      className="w-64 h-40 cursor-pointer perspective"
    >
      <div
        className={`relative w-full h-full duration-500 transform ${
          flipped ? "rotate-y-180" : ""
        }`}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front */}
        <div
          className="absolute w-full h-full bg-white rounded-xl shadow-lg flex items-center justify-center"
          style={{ backfaceVisibility: "hidden" }}
        >
          <h3 className="text-xl font-semibold">Mancala AI</h3>
        </div>

        {/* Back */}
        <div
          className="absolute w-full h-full bg-blue-500 text-white rounded-xl shadow-lg flex items-center justify-center p-4"
          style={{
            transform: "rotateY(180deg)",
            backfaceVisibility: "hidden",
          }}
        >
          <p className="text-center text-sm">
            test
          </p>
        </div>
      </div>
    </div>
  );
}