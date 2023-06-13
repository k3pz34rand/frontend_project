import webpack from "webpack";
import { buildPlugins } from "./buildPlugins";
import { buildResolvers } from "./buildResolvers";
import { BuildOptions } from "./types/config";
import { buildLoaders } from "./buildLoaders";
import { buildDevServer } from "./buildDevServer";

export function buildWebpackConfig(
    options: BuildOptions
): webpack.Configuration {
    const { paths, mode, isDev } = options;
    return {
        mode: mode,
        entry: paths.entry,
        output: {
            filename: "main.[contenthash].js",
            path: paths.build,
            clean: true,
        },
        plugins: buildPlugins(options),
        resolve: buildResolvers(options),
        module: { rules: buildLoaders(isDev) },
        devtool: isDev ? "inline-source-map" : undefined,
        devServer: isDev ? buildDevServer(options) : undefined,
    };
}
