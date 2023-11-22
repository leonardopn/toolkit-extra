import AutoImport from "unplugin-auto-import/vite";
import { defineConfig } from "vitest/config";

export default defineConfig({
    plugins: [
        AutoImport({
            imports: ["vitest"],
            dts: "./src/@types/Vitest/index.d.ts", // generate TypeScript declaration
        }),
    ],
    test: {
        environment: "node",
    },
});
