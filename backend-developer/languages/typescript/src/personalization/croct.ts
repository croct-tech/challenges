import axiosDefault, {AxiosInstance} from 'axios';
import {PersonalizationClient, PersonalizationClientError} from './personalization';

export class CroctClient implements PersonalizationClient {
    private readonly apiKey: string;

    private readonly axiosClient: AxiosInstance;

    public constructor(apiKey: string, axiosClient: AxiosInstance = axiosDefault) {
        this.apiKey = apiKey;
        this.axiosClient = axiosClient;
    }

    public async issueToken(userId: string = ''): Promise<string> {
        const response = await this.axiosClient.get(`https://api.croct.io/token/${userId}`, {
            headers: {
                'X-Api-Key': this.apiKey,
            },
        }).catch(() => {
            throw new PersonalizationClientError('Failed to issue token.');
        });

        return response.data.token;
    }

    public async evaluate<T>(expression: string, token: string): Promise<T> {
        const url = new URL(`https://api.croct.io/session/web/evaluate`);

        url.searchParams.set('expression', expression);

        const response = await this.axiosClient.get(url.toString(), {
            headers: {
                'X-App-Id': CroctClient.getAppId(token),
                'X-Token': token,
            },
        }).catch(() => {
            throw new PersonalizationClientError('Failed to evaluate expression.');
        });

        return response.data;
    }

    /**
     * Extracts the app ID from the token's payload.
     *
     * @param {string} token
     * @returns {string}
     * @private
     */
    private static getAppId(token: string): string {
        const [header] = token.split('.', 1);

        const decoded = Buffer.from(header, 'base64').toString('utf8');

        return JSON.parse(decoded).appId;
    }
}
