// standard
import type { NextConfig } from 'next';

// local
import { envConfig } from './env.config';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: envConfig.pagesBasePath || undefined,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;