import { NextResponse } from "next/server";

export async function GET() {
  const apiKey = process.env.TALENT_API_KEY;

  if (!apiKey) {
    console.error("Missing TALENT_API_KEY");
    return NextResponse.json({ score: null }, { status: 500 });
  }

  const res = await fetch(
    "https://api.talentprotocol.com/score?id=d43f3352-c4ac-4c32-8eba-a7277a2f86aa",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": apiKey,
      },
    }
  );

  if (!res.ok) {
    console.error("Talent API error:", res.status);
    return NextResponse.json({ score: null }, { status: res.status });
  }

  const json = await res.json();
  const score = json?.score?.points ?? null;

  return NextResponse.json({ score });
}
