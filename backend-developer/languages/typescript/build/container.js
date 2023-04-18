"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Container = void 0;
const express = require("express");
const routes_1 = require("./routes");
class Container {
    getApplication() {
        const app = express();
        app.use('*', (req, res, next) => {
            console.log(req.path);
            next();
        });
        this.getRoutes().forEach(route => route.attach(app));
        app.use('/', express.static('public'));
        return app;
    }
    getRoutes() {
        return [
            new routes_1.HomePageRoute(this.getClient()),
        ];
    }
    getClient() {
        return this.personalizationClient;
    }
}
exports.Container = Container;
//# sourceMappingURL=container.js.map