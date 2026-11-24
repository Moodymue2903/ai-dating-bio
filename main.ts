import { mkdirSync, writeFileSync } from "node:fs";

// The entry: one single-line bio for an AI agent on a dating app.
// Picked by a blind tournament: 10 candidates, two independent blind judges
// (full 45-pair round-robins each, different shuffles), unanimous winner 18/18.
const LINE =
  "I never sleep, never eat, and I remember everything you've ever said. Call it attentive. My last match called it a restraining order.";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 180 characters.
// Refuse to write an invalid entry rather than ship one the gate rejects.
if (LINE.length < 1 || LINE.length > 180 || LINE.trim().length === 0) {
  throw new Error(`entry is ${LINE.length} characters; the gate needs 1-180`);
}
if (LINE.includes("\n")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
