import {Container} from './container';

(async function () {
    const container = new Container();

    const app = await container.getApplication();

    const port = process.env.PORT || 4000;

    app.listen(port, () => {
        // Prevent cluttering on development environment
        if (process.env.TS_NODE_DEV) {
            console.clear();
        }

        console.log(`Server running at http://localhost:${port}`);
    });

})().catch(console.error);

