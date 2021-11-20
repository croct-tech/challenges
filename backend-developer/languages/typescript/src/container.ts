import * as cookieParser from 'cookie-parser';
import {readFile} from 'fs/promises';
import * as express from 'express';
import {CroctClient} from './personalization/croct';
import {PersonalizationClient} from './personalization/personalization';
import {HomePageRoute, Route} from './route';

export class Container {
    private personalizationClient?: PersonalizationClient;

    public async getApplication(): Promise<express.Application> {
        const app = express();

        app.use(cookieParser());

        const routes = await this.getRoutes();

        routes.forEach(route => route.attach(app));

        app.use('/', express.static('public'));

        return app;
    }

    private async getRoutes(): Promise<Route[]> {
        return [
            new HomePageRoute(
                this.getClient(),
                this.getCroctTokenCookieName(),
                await this.getHomeTemplate(),
            ),
        ];
    }

    private getCroctTokenCookieName(): string {
        return 'croctToken';
    }

    private getClient(): PersonalizationClient {
        if (this.personalizationClient === undefined) {
            this.personalizationClient = new CroctClient(requireEnv('CROCT_API_KEY'));
        }

        return this.personalizationClient;
    }

    private async getHomeTemplate(): Promise<string> {
        return readFile('public/index.html', 'utf8');
    }
}

function requireEnv(name: string): string {
    const value = process.env[name];

    if (value === undefined) {
        throw new Error(`Environment variable ${name} is not set`);
    }

    return value;
}
