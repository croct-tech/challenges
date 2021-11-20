import {IRouter} from 'express';

export type Router = IRouter;

export interface Route {
    attach(router: Router): void;
}
