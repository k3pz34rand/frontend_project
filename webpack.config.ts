import path from 'path';
import webpack from 'webpack';
import { BuildEnv, BuildPaths } from './config/build/types/config';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';

function config(env: BuildEnv) {
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'dist'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
    };
    const mode = env.mode || 'development';
    const PORT = env.port || 3000;
    const isDev = mode === 'development';
    const apiUrl = env.apiUrl || 'http://localhost:8000';
    const project = 'frontend';

    const config: webpack.Configuration = buildWebpackConfig({
        isDev,
        mode,
        paths,
        port: PORT,
        apiUrl,
        project,
    });

    return config;
}

export default config;
