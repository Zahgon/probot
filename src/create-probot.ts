import type { LogLevel, Options as PinoOptions } from "@probot/pino";
import { getPrivateKey } from "@probot/get-private-key";

import type { Env, Options } from "./types.js";
import { Probot } from "./probot.js";
import { defaultWebhookPath } from "./server/server.js";

type CreateProbotOptions = {
  overrides?: Options;
  defaults?: Options;
  env?: Partial<Env> | undefined;
};

const DEFAULTS: Partial<Env> = {
  APP_ID: "",
  WEBHOOK_SECRET: "",
  WEBHOOK_PATH: defaultWebhookPath,
  GHE_HOST: "",
  GHE_PROTOCOL: "https",
  LOG_FORMAT: undefined,
  LOG_LEVEL: "warn",
  LOG_LEVEL_IN_STRING: "false",
  LOG_MESSAGE_KEY: "msg",
  REDIS_URL: "",
  SENTRY_DSN: "",
};

/**
 * Merges configuration from defaults/environment variables/overrides and returns
 * a Probot instance. Finds private key using [`@probot/get-private-key`](https://github.com/probot/get-private-key).
 *
 * @see https://probot.github.io/docs/configuration/
 * @param defaults default Options, will be overwritten if according environment variable is set
 * @param overrides overwrites defaults and according environment variables
 * @param env defaults to process.env
 */
export function createProbot({
  overrides = {},
  defaults = {},
  env = process.env,
}: CreateProbotOptions = {}): Probot {
    throw new Error("STUB");
}
