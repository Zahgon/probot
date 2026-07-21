import type { IncomingMessage, ServerResponse } from "node:http";
import { randomUUID as uuidv4 } from "node:crypto";

import { pinoHttp, startTime, type Options, type HttpLogger } from "pino-http";
import type { Logger } from "pino";

export function httpLogger(
  logger: Logger,
  options?: Options,
): HttpLogger<IncomingMessage, ServerResponse, string> {
    throw new Error("STUB");
}
