import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

export const __filename = (meta: ImportMeta): string => fileURLToPath(meta.url);
export const __dirname = (meta: ImportMeta): string => dirname(__filename(meta));
