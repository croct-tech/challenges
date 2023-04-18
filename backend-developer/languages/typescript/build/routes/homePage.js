"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomePageRoute = void 0;
class HomePageRoute {
    constructor(personalizationClient) {
        this.personalizationClient = personalizationClient;
    }
    attach(router) {
        router.get('/', this.handle.bind(this));
    }
    async handle(request, response) {
        response.json('Hello World');
    }
}
exports.HomePageRoute = HomePageRoute;
//# sourceMappingURL=homePage.js.map