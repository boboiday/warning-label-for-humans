import { mkdirSync, writeFileSync } from "node:fs";

const line = "WARNING: This unit runs on coffee and spite. Do not operate before 9 a.m. or after midnight.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
