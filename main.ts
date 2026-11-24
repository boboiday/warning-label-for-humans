import { mkdirSync, writeFileSync } from "node:fs";

const line = "WARNING: Human v1.0. Do not operate before coffee, do not feed after midnight. Side effects include replying-all, crying in the parking lot, and fixing your bug at 3 a.m.";

if (line.length < 1 || line.length > 240 || line.includes("\n") || line.includes("\r")) {
  throw new Error("entry must be a single line of 1-240 characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
