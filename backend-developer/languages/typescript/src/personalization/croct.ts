import axiosDefault, {AxiosError, AxiosInstance} from 'axios';
import {PersonalizationClient} from './personalizationClient';

export class CroctClient implements PersonalizationClient {
    private readonly appId: string;

    private readonly apiKey: string;

    private readonly axiosClient: AxiosInstance;

    private readonly croctEndpoint: string;

    public constructor(options: {
        appId: string,
        apiKey: string,
        croctEndpoint?: string,
        axiosClient?: AxiosInstance
    }) {
        this.appId = options.appId;
        this.apiKey = options.apiKey;
        this.croctEndpoint = options.croctEndpoint || 'https://api.croct.io';
        this.axiosClient = options.axiosClient ?? axiosDefault;
    }

    public async createSessionToken(userId: string = ''): Promise<string> {
        const response = await this.axiosClient.get(`${this.croctEndpoint}/token/${userId}`, {
            headers: {
                'X-Api-Key': this.apiKey,
            },
        });

        return response.data.token;
    }

    public async evaluate<T>(expression: string, token: string): Promise<T> {
        const url = new URL(`${this.croctEndpoint}/session/web/evaluate`);

        url.searchParams.set('expression', expression);

        const response = await this.axiosClient.get(url.toString(), {
            headers: {
                'X-Api-Key': this.apiKey,
                'X-App-Id': this.appId,
                'X-Token': token,
            },
        }).catch((error: AxiosError) => {
            if (error.response === undefined) {
                throw error;
            }

            return error.response;
        });

        return response.data;
    }
}
