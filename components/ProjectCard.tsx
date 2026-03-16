"use client"

import { useState } from "react"

type ProjectCardProps = {
  title: string
  description: string
  image: string
}

export default function ProjectCard({ title, description, image }: ProjectCardProps) {
  const [flipped, setFlipped] = useState(false)

  return (
    <div
      onClick={() => setFlipped(!flipped)}
      className="w-64 h-40 rounded-xl shadow-lg overflow-hidden cursor-pointer"
    >
      {!flipped ? (
        <div className="h-full flex flex-col">
          <img src={image} className="h-2/3 object-cover" />
          <div className="flex items-center justify-center h-1/3 bg-white">
            <h3 className="font-semibold">{title}</h3>
          </div>
        </div>
      ) : (
        <div className="h-full bg-slate-800 text-white flex items-center justify-center p-4 text-center">
          {description}
        </div>
      )}
    </div>
  )
}