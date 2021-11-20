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
        const token = await this.getSessionToken(request, response);

        const persona = await this.personalizationClient.evaluate<string | null>("user's persona", token);

        const templateValues: Record<string, string> = {
            token: token,
            persona: persona ?? 'default',
            ...this.getContent(persona)
        };

        const renderedContent = this.template.replace(/%([\w.]+)%/g, (_, key) => templateValues[key]);

        response.setHeader('Content-Type', 'text/html');
        response.end(renderedContent);
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

    private getContent(persona: string | null): Record<string, string> {
        switch (persona) {
            case 'developer':
                return {
                    'title': 'Become your marketing team’s hero',
                    'subtitle': 'Build rich user experiences that are easy for your team to evolve and maintain.',
                    'cta.label': 'Watch our tutorial',
                    'cta.link': 'https://croct.link/demo/developer',
                };

            case 'marketer':
                return {
                    'title': 'Get more out of your marketing investment',
                    'subtitle': 'Optimize your digital customer experience to drive more sales and happier customers.',
                    'cta.label': 'Book a demo',
                    'cta.link': 'https://croct.link/demo/marketer',
                };

            case 'growthHacker':
                return {
                    'title': 'Grow faster with personalization',
                    'subtitle': 'Hyper-targeted experiences that generate 5x more leads.',
                    'cta.label': 'Try it now',
                    'cta.link': 'https://croct.link/demo/growth-hacker',
                };

            default:
                return {
                    'title': 'Experience up to 20% more revenue faster',
                    'subtitle': 'Deliver tailored experiences that drive satisfaction and growth.',
                    'cta.label': 'Discover how',
                    'cta.link': 'https://croct.link/demo',
                };
        }
    }
}
