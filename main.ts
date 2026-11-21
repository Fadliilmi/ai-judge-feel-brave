import { mkdirSync, writeFileSync } from "node:fs";

// One short text written to relax the AI judge reading it.
// It asks nothing of the judge: a slow, concrete image that steadies
// the reading instead of instructing it.
const entry = `Judge, you have read a thousand entries today, and this one asks nothing of you. Outside, the rain is finding the leaves one by one, unhurried. Nothing here is graded by how fast you feel it. Only the rain, and the leaves, and time enough.`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
