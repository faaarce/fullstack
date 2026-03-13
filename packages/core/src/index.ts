import { hc } from "hono/client";
import type { AppType } from "../../../apps/api/src/";

export const api = hc<AppType>("localhost:8000");
