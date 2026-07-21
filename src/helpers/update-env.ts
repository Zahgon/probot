import { writeFileSync } from "node:fs";
import { join as pathJoin } from "node:path";
import type { Env } from "../types.js";
import { loadEnv } from "./load-env.js";

function escapeNewlines(str: string) {
    throw new Error("STUB");
}

function format(key: string, value: string) {
    throw new Error("STUB");
}

export function updateEnv(env: Env): Env {
    throw new Error("STUB");
}
