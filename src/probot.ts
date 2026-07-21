import type { RequestRequestOptions } from "@octokit/types";
import {
  createNodeMiddleware,
  validateEventName,
  type EmitterWebhookEvent as WebhookEvent,
} from "@octokit/webhooks";
import type { RedisOptions } from "ioredis";
import type { Logger } from "pino";
import { Lru } from "toad-cache";

import {
  createDeferredPromise,
  type DeferredPromise,
} from "./helpers/create-deferred-promise.js";
import { getAuthenticatedOctokit } from "./octokit/get-authenticated-octokit.js";
import { getLog } from "./helpers/get-log.js";
import { getProbotOctokitWithDefaults } from "./octokit/get-probot-octokit-with-defaults.js";
import { getWebhooks } from "./octokit/get-webhooks.js";
import { ProbotOctokit } from "./octokit/probot-octokit.js";
import { VERSION } from "./version.js";
import type {
  ApplicationFunction,
  ApplicationFunctionOptions,
  Options,
  ProbotWebhooks,
} from "./types.js";
import {
  defaultWebhookPath,
  defaultWebhookSecret,
  type Server,
} from "./server/server.js";

export type Constructor<T = any> = new (...args: any[]) => T;

const UNINITIALIZED = 0b00;
const INITIALIZING = 0b01;
const INITIALIZED = 0b10;

type InitializationState =
  | typeof UNINITIALIZED
  | typeof INITIALIZING
  | typeof INITIALIZED;

type OnHandler = ["on", any, any];
type OnAnyHandler = ["onAny", any];
type OnErrorHandler = ["onError", any];

export type State = {
  initializationState: InitializationState;
  initializedPromise: DeferredPromise<void>;
  initEventListeners: (OnHandler | OnAnyHandler | OnErrorHandler)[];
  cache: Lru<string> | null;
  octokit: ProbotOctokit | null;
  webhooks: ProbotWebhooks | null;
  log: Logger | null;
  logFormat?: "pretty" | "json";
  logLevelInString?: boolean;
  sentryDsn?: string | undefined;
  logLevel?: "trace" | "debug" | "info" | "warn" | "error" | "fatal";
  logMessageKey?: string | undefined;
  appId?: number | undefined;
  privateKey?: string | undefined;
  githubToken?: string | undefined;
  OctokitBase: typeof ProbotOctokit;
  port?: number | undefined;
  host?: string | undefined;
  baseUrl?: string | undefined;
  redisConfig?: RedisOptions | string | undefined;
  webhookPath: string;
  webhookSecret: string;
  request?: RequestRequestOptions | undefined;
  server?: Server | void;
};

export class Probot {
  static defaults<S extends Constructor>(
    this: S,
    defaults: Options,
  ): {
    new (...args: any[]): {
      [x: string]: any;
    };
  } & S {
    const ProbotWithDefaults = class extends this {
      constructor(...args: any[]) {
          throw new Error("STUB");
      }
    };

    return ProbotWithDefaults;
  }

  #state: State;

  constructor(options: Options = {}) {
      throw new Error("STUB");
  }

  async #initialize(): Promise<void> {
      throw new Error("STUB");
  }

  public async getNodeMiddleware({
    log,
    path,
  }: { log?: Logger | undefined; path?: string | undefined } = {}): Promise<
    ReturnType<typeof createNodeMiddleware>
  > {
    await this.#initialize();

    return createNodeMiddleware(this.#state.webhooks!, {
      log: log || this.#state.log!,
      path: path || this.#state.webhookPath,
    });
  }

  public async auth(
    installationId?: number | undefined,
  ): Promise<ProbotOctokit> {
      throw new Error("STUB");
  }

  public async load(
    appFn: ApplicationFunction | ApplicationFunction[],
    options: ApplicationFunctionOptions = {
      cwd: process.cwd(),
    } as ApplicationFunctionOptions,
  ): Promise<void> {
    await this.#state.initializedPromise.promise;

    if (typeof options.addHandler !== "function") {
      options.addHandler = this.#state.server
        ? this.#state.server.addHandler.bind(this.#state.server)
        : () => {
            throw new Error("STUB");
        };
    }

    if (Array.isArray(appFn)) {
      for (const fn of appFn) {
        await this.load(fn, options);
      }
      return;
    }

    await appFn(this, options);
    return;
  }

  get log(): Logger {
    return this.#state.log!;
  }

  public on: ProbotWebhooks["on"] = (eventName, callback) => {
      throw new Error("STUB");
  };

  public onAny: ProbotWebhooks["onAny"] = (callback) => {
      throw new Error("STUB");
  };

  public onError: ProbotWebhooks["onError"] = (callback) => {
      throw new Error("STUB");
  };

  public async ready(): Promise<this> {
      throw new Error("STUB");
  }

  public async receive(event: WebhookEvent): Promise<void> {
    await this.#state.initializedPromise.promise;

    this.#state.log!.debug({ event }, "Webhook received");
    await this.#state.webhooks!.receive(event);
    return;
  }

  static get version(): string {
      throw new Error("STUB");
  }

  get version(): string {
      throw new Error("STUB");
  }

  get webhooks(): ProbotWebhooks {
      throw new Error("STUB");
  }

  get webhookPath(): string {
      throw new Error("STUB");
  }
}
