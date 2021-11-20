import * as cookieParser from 'cookie-parser';
import {readFile} from 'fs/promises';
import * as express from 'express';
import {CroctClient} from './personalization/croct';
import {Personalization} from './personalization/personalization';
import {HomePageRoute, Route} from './routes';

export class Container {
    private personalizationClient?: Personalization;

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

    private getClient(): Personalization {
        if (this.personalizationClient === undefined) {
            this.personalizationClient = new CroctClient({
                appId: 'f140d279-57c0-426a-9800-634a05d395d6',
                apiKey: 'bb90592e-f437-4603-896a-854b7266f734',
            });
        }

        return this.personalizationClient!;
    }

    private async getHomeTemplate(): Promise<string> {
        return readFile('public/index.html', 'utf8');
    }
}
