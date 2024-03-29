/**
 *
 * @see https://webpack.js.org/configuration/dev-server/
 */

import {devServerProxyConfig} from './devServierProxy';

export const devServerConfig = {
    client: {
        overlay: false,
    },
    headers: {'Access-Control-Allow-Origin': '*'},
    historyApiFallback: true,
    hot: true,
    port: 3000,
    proxy: devServerProxyConfig,
    static: {
        publicPath: '/',
    },
};
