import axiosDefault, {AxiosError, AxiosInstance} from 'axios';
import {Personalization} from './personalization';

export class CroctClient implements Personalization {
    private readonly appId: string;

    private readonly apiKey: string;

    private readonly axiosClient: AxiosInstance;

    public constructor(options: {
        appId: string,
        apiKey: string,
        axiosClient?: AxiosInstance
    }) {
        this.appId = options.appId;
        this.apiKey = options.apiKey;
        this.axiosClient = options.axiosClient ?? axiosDefault;
    }

    public async issueToken(userId: string = ''): Promise<string> {
        const response = await this.axiosClient.get(`https://api.croct.io/token/${userId}`, {
            headers: {
                'X-Api-Key': this.apiKey,
            },
        });

        return response.data.token;
    }

    public async evaluate<T>(expression: string, token: string): Promise<T> {
        const url = new URL(`https://api.croct.io/session/web/evaluate`);

        url.searchParams.set('expression', expression);

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

export class PersonalizationClientError extends Error {
    public constructor(message: string) {
        super(message);
    }
}
