import { npxImport } from "npx-import-light";
import Bottleneck from "bottleneck";
import type { RedisOptions } from "ioredis";
import type { Logger } from "pino";
import type { ThrottlingOptions } from "@octokit/plugin-throttling";

type Options = {
  log: Logger;
  redisConfig?: RedisOptions | string | undefined;
};

export async function getOctokitThrottleOptions(
  options: Options,
): Promise<ThrottlingOptions> {
    throw new Error("STUB");
}

let Redis = null;

async function getRedisClient({ redisConfig }: Options): Promise<any> {
    throw new Error("STUB");
}
