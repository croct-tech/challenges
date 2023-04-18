"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CroctClient = void 0;
const axios_1 = require("axios");
class CroctClient {
    constructor(options) {
        this.appId = options.appId;
        this.apiKey = options.apiKey;
        this.croctEndpoint = options.croctEndpoint || 'https://api.croct.io';
        this.axiosClient = options.axiosClient ?? axios_1.default;
    }
    async createSessionToken(userId = '') {
        const response = await (this.axiosClient.get(`${this.croctEndpoint}/token/${userId}`, {
            headers: {
                'X-Api-Key': this.apiKey,
            },
        }).catch((error) => {
            if (error.response === undefined) {
                throw error;
            }
            return error.response;
        }));
        if (response.status !== 200) {
            throw new Error('Failed to acquire token.');
        }
        return response.data.token;
    }
    async evaluate(expression, token, context) {
        const url = new URL(`${this.croctEndpoint}/session/web/evaluate`);
        url.searchParams.set('expression', expression);
        url.searchParams.set('context', JSON.stringify(context));
        const response = await this.axiosClient.get(url.toString(), {
            headers: {
                'X-Api-Key': this.apiKey,
                'X-App-Id': this.appId,
                'X-Token': token,
            },
        });
        return response.data;
    }
}
exports.CroctClient = CroctClient;
(async () => {
    const userId = 'erick.doe';
    const client = new CroctClient({
        appId: '00000000-0000-0000-0000-000000000000',
        apiKey: '11111111-1111-1111-1111-111111111111',
    });
    const token = await client.createSessionToken(userId);
    const result = await client.evaluate('location\'s city is in context\'s cities', token, {
        cities: ['São Paulo', 'Porto Alegre'],
    });
    console.log(result);
})().catch((error) => {
    console.error(error);
});
//# sourceMappingURL=croct.js.map