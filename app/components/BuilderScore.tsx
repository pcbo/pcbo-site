"use client";

import { useEffect, useState } from "react";

export default function BuilderScore() {
  const [score, setScore] = useState<number | null>(null);

  useEffect(() => {
    async function fetchScore() {
      try {
        const res = await fetch("/api/builder-score");
        const data = await res.json();
        setScore(data?.score ?? null);
      } catch {
        setScore(null);
      }
    }

    fetchScore();
  }, []);

  if (score === null) return null;

  return (
    <a
      href="https://app.talentprotocol.com/builderscore/d43f3352-c4ac-4c32-8eba-a7277a2f86aa"
      target="_blank"
      rel="noopener noreferrer"
      className="text-neutral-400 text-sm hover:text-neutral-300 transition-colors"
    >
      Builder Score: <span className="text-neutral-300">{score}</span> ↗
    </a>
  );
}
