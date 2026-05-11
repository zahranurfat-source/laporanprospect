name: Research Portfolio CI

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build-and-test:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout Code
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20' # Sesuaikan dengan versi Node Anda
          cache: 'npm'

      - name: Install Dependencies
        run: npm install

      - name: Run Build Test
        run: npm run build
        # Ini memastikan riset Anda tidak error saat akan di-deploy ke Vercel
