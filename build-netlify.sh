#!/bin/bash

set -e

echo "📘 Building Storybook for Netlify..."

# Clean output
rm -rf dist
mkdir -p dist/summit-ui/docs

# Install deps and build Storybook
npm install
npm run build-storybook -- --output-dir storybook-static

# Move to /dist/summit-ui/docs
cp -r storybook-static/* dist/summit-ui/docs/

echo "✅ Storybook built and ready at /storybook"
