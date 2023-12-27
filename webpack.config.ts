import webpack from "webpack";
import path from "path";
import { buildWebpackOptions } from "./config/build/buildWebpackConfig";
import { buildEnv } from "./config/build/types/config";

export default (env: buildEnv) => {
    const paths = {
        entry: path.resolve(__dirname, "src", "index.tsx"),
        build: path.resolve(__dirname, "dist"),
        html: path.resolve(__dirname, "public", "index.html"),
        src: path.resolve(__dirname, "src")
    };

    const mode = env.mode || "development";
    const PORT = env.port || 3000;

    const isDev = mode === "development";
    const config: webpack.Configuration = buildWebpackOptions({
        mode,
        paths,
        port: PORT,
        isDev,
    });
    return config;
};
