import { Configuration } from "webpack";
import { BuildOptions } from "./types/config";
import path from "path";
import { buildPlugings } from "./buildPlugings";
import { buildResolvers } from "./buildResolvers";

export function buildWebpackConfig(options: BuildOptions): Configuration {
  const { paths, mode } = options;
  return {
    mode,
    entry: paths.entry,
    output: {
      filename: '[name].[contenthash].js',
      path: paths.build,
      clean: true,
    },
    plugins: buildPlugings(options),
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },
    resolve: buildResolvers()
  }
}