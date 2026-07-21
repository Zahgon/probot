import type { Handler } from "../../types.js";

export const notFoundHandler: Handler = (_req, res) => {
    throw new Error("STUB");
};
