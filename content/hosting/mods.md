---
title: Setting up and using mods
description: How to set up and use mods on your VU dedicated server.
readingTime: true
weight: 6
---

VU mods are hosted on your server and automatically sent to all joining clients. As such, your server needs to be correctly configured to properly run them.

## Placing the mod files

The first step after downloading a mod is to place it in the right place. Each mod goes inside its own folder inside the `Admin/Mods` folder inside the server instance directory. For example, if we had a mod named `incredible-mod`, you would place it inside the `Admin/Mods/incredible-mod` directory. 

To make sure that the files are in the correct folder, inside that `incredible-mod` directory you should see a `mod.json` file (alongside other files and folders). In general terms, your server instance directory should look something like this when you have mods installed:

```
/ server.key
/ Admin /
    / Startup.txt
    / MapList.txt
    / ModList.txt
    / Mods /
        / incredible-mod /
            / mod.json
            / ...
```

## Loading mods

By default, VU servers will not load any mods, even if you've placed them inside the `Admin/Mods` folder. Instead, you must explicitly tell your server which mods to load by specifying them in the `ModList.txt` file. Simply add the folder name of the mod you want to load, having each name in a new line. For example, if we wanted to load the `incredible-mod` we put in our `Admin/Mods` folder earlier, our `ModList.txt` file would look something like this:

```
incredible-mod
```

If we had another mod called `amazing-mod` and we wanted to load them both, then it would look like this:

```
incredible-mod
amazing-mod
```