import type { EmitterWebhookEvent as WebhookEvent } from "@octokit/webhooks";
import type { Logger } from "pino";

import type { ProbotOctokit } from "./probot-octokit.js";
import { Context } from "../context.js";

type WebhookTransformOptions = {
  log: Logger;
  octokit: ProbotOctokit;
};

/**
 * Probot's transform option, which extends the `event` object that is passed
 * to webhook event handlers by `@octokit/webhooks`
 * @see https://github.com/octokit/webhooks.js/#constructor
 */
export async function webhookTransform(
  options: WebhookTransformOptions,
  event: WebhookEvent,
) {
    throw new Error("STUB");
}
