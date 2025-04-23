"use client";

import { useEffect, useState } from "react";

export default function TimeGreeting() {
  const [greeting, setGreeting] = useState<string | null>(null);

  useEffect(() => {
    const hour = new Date().getHours();
    setGreeting(hour >= 8 && hour < 20 ? "gm" : "gn");
  }, []);

  if (greeting === null) {
    return <h1 className="text-3xl font-bold tracking-tighter w-16 h-8" />;
  }

  return <h1 className="text-3xl font-bold tracking-tighter">{greeting}</h1>;
}
