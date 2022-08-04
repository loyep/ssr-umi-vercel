import { defineConfig } from 'umi'
export default defineConfig({
  svgr: {},
  hash: true,
  routePrefetch: {},
  manifest: {},
  clientLoader: {},
  ssr: {
    serverBuildPath: '/api/umi.server.js',
  },
})
