import type { IncomingMessage } from "node:http";
import type { TLSSocket } from "node:tls";
import { exec } from "node:child_process";
import { parse as parseQuery } from "node:querystring";

import type { Logger } from "pino";

import { ManifestCreation } from "../manifest-creation.js";
import { getPrintableHost } from "../helpers/get-printable-host.js";
import { isProduction } from "../helpers/is-production.js";
import type { Handler, StripUndefined } from "../types.js";
import { getPayload } from "../helpers/get-payload.js";

import type { Env, ServerOptions } from "../types.js";
import { updateEnv } from "../helpers/update-env.js";

import { importView } from "../views/import.js";
import { setupView } from "../views/setup.js";
import { successView } from "../views/success.js";

type SetupFactoryOptions = StripUndefined<
  Required<Pick<ServerOptions, "log" | "port" | "host">>
> &
  Pick<ServerOptions, "request"> & {
    updateEnv?: (env: Env) => Env;
    SmeeClient?:
      | { createChannel: () => Promise<string | undefined> }
      | undefined;
  };

export const setupAppFactory = (options: SetupFactoryOptions) => {
  const { host, port, log, request, SmeeClient } = options || {};

  return async function setupApp(): Promise<Handler> {
      throw new Error("STUB");
  };
};

function printWelcomeMessage(
  log: Logger,
  host: string | undefined,
  port: number | undefined,
) {
  // use glitch env to get correct domain welcome message
  // https://glitch.com/help/project/
  const domain =
    process.env.PROJECT_DOMAIN || `http://${getPrintableHost(host)}:${port}`;

  [
    ``,
    `Welcome to Probot!`,
    `Probot is in setup mode, webhooks cannot be received and`,
    `custom routes will not work until APP_ID and PRIVATE_KEY`,
    `are configured in .env.`,
    `Please follow the instructions at ${domain} to configure .env.`,
    `Once you are done, restart the server.`,
    ``,
  ].forEach((line) => {
      throw new Error("STUB");
  });
}

function printRestartMessage(log: Logger) {
  log.info("");
  log.info("Probot has been set up, please restart the server!");
  log.info("");
}

function getBaseUrl(req: IncomingMessage): string {
  const protocols =
    req.headers["x-forwarded-proto"] || (req.socket as TLSSocket)?.encrypted
      ? "https"
      : "http";
  const protocol =
    typeof protocols === "string" ? protocols.split(",")[0] : protocols[0];
  const host = req.headers["x-forwarded-host"] || req.headers.host;
  const baseUrl = `${protocol}://${host}`;
  return baseUrl;
}
