import type { Logger } from "pino";
import type {
  WebhookError,
  EmitterWebhookEvent as WebhookEvent,
} from "@octokit/webhooks";

export function getErrorHandler(log: Logger) {
    throw new Error("STUB");
}
