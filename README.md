# VU Documentation

This repository hosts the documentation for Venice Unleashed. You can find a published version of this documentation at [https://docs.veniceunleashed.net/](https://docs.veniceunleashed.net/).

## Developing locally

The documentation website is statically generated using [Hugo](https://gohugo.io/), which can also be used to develop the documentation locally and preview changes on the fly.

### First-time setup

First, you must clone the documentation repository locally to your computer. You can do this by running the following command:

```bash
git clone git@github.com:EmulatorNexus/VU-Docs.git
```

Before you can start developing you must ensure that you have the latest extended version of [Hugo](https://github.com/gohugoio/hugo/releases) and [Node.js](https://nodejs.org/) installed and available in your path. For Hugo you can alternatively place the hugo executable (eg. `hugo.exe`) inside the checked-out repository directory. Once you have, open a terminal in your local repository directory and run the following command:

```bash
npm install
```

### Using the development server

You can start a local development server by opening a terminal in your local repository directory and running the following command:

```bash
npm start
```

This will start a local server at [http://localhost:1313](http://localhost:1313) which you can visit from your browser to see an active snapshot of the documentation site. Any changes to website content in the `content` folder will get automatically reflected on your browser in real-time.

### Building the site

To build the site and prepare it for publishing open a terminal in your local repository directory and run the following command:

```bash
npm run build:types
npm run build:index
npm run build
```

This will build the website and output it to a `dist` folder inside the repository directory. The contents of that folder can then be published to a destination of your choice.