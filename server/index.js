import { ready } from "consola";
import { Nuxt, Builder } from "nuxt";
import { app, server } from "./app";

// import and set Nuxt.js options
import config, { dev } from "../nuxt.config.js";
dev = !(process.env.NODE_ENV == "production");

async function start() {
  // init Nuxt.js
  const nuxt = new Nuxt(config);

  const { host, port } = nuxt.option.server;
  if (dev) {
    const builder = new Builder();
    await builder.build();
  } else {
    await nuxt.ready();
  }

  app.use(nuxt.render);

  //   server.listen(port, host);
  server.listen(port, () => {
    ready({
      message: `Hi mohamed your Server Start on http://${host}:${port}`,
      badge: true
    });
  });
}

start();
