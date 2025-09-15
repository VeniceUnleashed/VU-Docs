---
title: Migrating to new UI system
description: A guide on how to migrate your existing mods to the new WebUI system.
readingTime: true
weight: 3
---

We have introduced a new UI system, built on Coherent Labs's Gameface, to replace the previous Chromium based UI system. The new system is more efficient, and more stable. However, Gameface is built specifically for games, and as such it does not support all the features of a full web browser like Chromium. This means that some existing mods that where built with the old UI system may not work correctly with the new one. In this guide we will go over the most common issues that may arise when migrating your mod to the new UI system, and how to fix them.

## Debugging

Just like with the previous UI system, you can enable WebUI debugging by adding the `-dwebui` command line argument to your client. 

This allows you to inspect the UI using Chromium Dev Tools, which can be accessed by opening [http://localhost:8884](http://localhost:8884) in a Chromium based browser (like Google Chrome or Microsoft Edge).

Furthermore if you want to develop your UI, without launching VU. You can also download the [Coherent Gameface Player](https://i.nofate.me/gy7d0C1cOS8WRcnCaziEMsvm.zip). This is a standalone application that acts like a browser. Like with VU, you can inspect the UI using Chromium Dev Tools, however the url is [http://localhost:9444](http://localhost:9444). It also doesn't expose the same APIs that the version built into VU does, so keep that in mind when using `WebUI.Call`.

## Component libraries

If you're making a new UI mod, or are looking to workaround some element limitation of Gameface, we recommend having a look at [Gameface UI](https://gameface-ui.coherent-labs.com/) and [GameUIComponents](https://coherentlabs.github.io/GameUIComponents/en/). Both of these are designed to work specifically with Gameface, and should help cover many common use cases, especially around inputs, checkboxes, etc.

## Notable differences

These are some notable differences between Gameface and Chromium, but for a more complete list you can refer to [Gameface's Wiki](https://docs.coherent-labs.com/cpp-gameface/content_development/supported_features_tables/).

### CSS

Gameface does not support all CSS features and attributes. Some of the most notable differences include:

- Grid & Table layouts are not supported.
- Display attributes like `inline` and `inline-block` are not supported.
- Advanced selectors like `:nth-last-child` are not supported.

VU prints warnings in the console for unsupported CSS features, so be sure to check the console for any issues.

You can find more information about supported CSS features in the [Gameface documentation](https://docs.coherent-labs.com/cpp-gameface/content_development/supported_features_tables/cssproperties/).

### CSS variables

Custom properties (CSS variables) are supported. However they can only be used in the full form of css attributes, and not in shorthand attributes. The following example does not work:

```css
.my-class {
  border: solid var(--my-border-width) var(--my-border-color);
}
```

However, using the full form of the attribute like this will work:

```css
.my-class {
  border-style: solid;
  border-width: var(--my-border-width);
  border-color: var(--my-border-color);
}
```

### HTML

Gameface does not support all HTML elements and attributes. Some of the most notable differences include:

- The `<audio>` element is NOT supported, use `<video>` instead (continued [below](#audio)).
- The `<input>` element ONLY supports `text`, `button` and `password` types.
- The `<canvas>` element ONLY supports 2D rendering context, WebGL is **NOT** supported. 

More info about the supported features can be found [here](https://docs.coherent-labs.com/cpp-gameface/content_development/supported_features_tables/canvassupport/).

All unsupported HTML elements are not visible in the UI. Watch your VU console logs for any such elements! 

You can find more information about supported HTML elements in the [Gameface documentation](https://docs.coherent-labs.com/cpp-gameface/content_development/supported_features_tables/htmlelements/).

### Audio

As mentioned above, the `<audio>` element is not supported. We can work around this by using a `<video>` element instead, with our audio encoded as a webm "video" file. 

Here's an example of how you can use [ffmpeg](https://www.ffmpeg.org/download.html) to convert a `wav` file to a format that the `<video>` element supports:

```bash
ffmpeg -i input.wav -c:a libvorbis -b:a 128k -f webm output.webm
```

This will generate an `output.webm` file which you can use with a `<video>` element, and control it like you would an equivalent `<audio>` element.

### Fonts

Gameface only supports TrueType and OpenType fonts and collections (.ttf, .ttc, .otf, .otc). If you're using custom fonts, make sure that they are in one of these formats!

