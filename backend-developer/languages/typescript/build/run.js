"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const container_1 = require("./container");
(async function () {
    const container = new container_1.Container();
    const app = await container.getApplication();
    const port = process.env.PORT || 4000;
    app.listen(port, () => {
        if (process.env.TS_NODE_DEV) {
            console.clear();
        }
        console.log(`Server running at http://localhost:${port}`);
    });
})().catch(console.error);
//# sourceMappingURL=run.js.map