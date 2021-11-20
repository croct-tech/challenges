import {Request, Response} from 'express';
import {PersonalizationClient} from '../personalization/personalizationClient';
import {Route, Router} from './route';

export class HomePageRoute implements Route {
    private readonly personalizationClient: PersonalizationClient;

    private readonly cookieName: string;

    private readonly template: string;

    public constructor(
        personalizationClient: PersonalizationClient,
        cookieName: string,
        template: string,
    ) {
        this.personalizationClient = personalizationClient;
        this.cookieName = cookieName;
        this.template = template;
    }

    public attach(router: Router): void {
        router.get('/', this.handle.bind(this));
    }

    private async handle(request: Request, response: Response): Promise<void> {
        const templateValues: Record<string, string> = {
            token: await this.getSessionToken(request, response),

        };

        response.setHeader('Content-Type', 'text/html');
        response.end(this.template.replace(/%([\w.]+)%/g, (_, key) => {
            console.log(key);

            return templateValues[key];
        }));
    }

    private async getSessionToken(request: Request, response: Response): Promise<string> {
        const cookie = request.cookies[this.cookieName];

        if (cookie !== undefined) {
            return cookie;
        }

        const token = await this.personalizationClient.createSessionToken();

        response.cookie(this.cookieName, token);

        return token;
    }
}
