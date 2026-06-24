# VU Documentation

This repository hosts the documentation for Venice Unleashed. You can find a published version of this documentation at [https://docs.veniceunleashed.net/](https://docs.veniceunleashed.net/).

## Developing locally

The documentation website is statically generated using [Hugo](https://gohugo.io/), which can also be used to develop the documentation locally and preview changes on the fly.

### First-time setup

First, you must clone the documentation repository locally to your computer. You can do this by running the following command:

```bash
git clone git@github.com:EmulatorNexus/VU-Docs.git
```

After cloning, initialize the git submodules:

```bash
git submodule update --init --recursive
```

#### Installing the toolchain

Building the site requires the **extended** version of [Hugo](https://github.com/gohugoio/hugo/releases) and [Node.js](https://nodejs.org/).

> **Important:** Hugo must be **older than 0.110.0**. The pinned Docsy theme relies on the `google_analytics_async` internal template that newer Hugo versions removed, so the latest Hugo will not build this site.

The easiest way to get compatible versions is [mise](https://mise.jdx.dev/), which reads the pinned Hugo and Node.js versions from the repository's `mise.toml`. With mise installed, run the following from the repository directory:

```bash
mise install
```

mise will then automatically use the correct extended Hugo and Node.js versions whenever you work inside the repository. If you prefer not to use mise, install an extended Hugo older than 0.110.0 and Node.js manually and make sure both are available in your path. (You can alternatively place the hugo executable, eg. `hugo.exe`, inside the checked-out repository directory.)

Finally, install the Node.js dependencies:

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