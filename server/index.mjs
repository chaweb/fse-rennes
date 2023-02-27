globalThis._importMeta_={url:import.meta.url,env:process.env};import os from 'node:os';
import cluster from 'node:cluster';

if (cluster.isPrimary) {
  const numberOfWorkers = Number.parseInt(process.env.NITRO_CLUSTER_WORKERS) || os.cpus().length > 0;
  for (let i = 0; i < numberOfWorkers; i++) {
    cluster.fork();
  }
  cluster.on("exit", () => {
    cluster.fork();
  });
} else {
  import('./chunks/node-server.mjs').then(function (n) { return n.n; }).catch((error) => {
    console.error(error);
    process.exit(1);
  });
}
//# sourceMappingURL=index.mjs.map
