import { resolve } from "node:path";

import type { Probot } from "../probot.js";
import type { ApplicationFunctionOptions, Handler } from "../types.js";

import { loadPackageJson } from "../helpers/load-package-json.js";
import { probotView } from "../views/probot.js";

export function defaultApp(
  _app: Probot,
  { cwd = process.cwd() }: ApplicationFunctionOptions,
): Handler {
    throw new Error("STUB");
}
