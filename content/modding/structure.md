---
title: Mod structure
description: The structure of VU mods and their components.
readingTime: true
weight: 1
---

All VU mods are hosted on the server-side and automatically downloaded by joining clients. As such, all mods must follow a specific structure.

## Location

Mods are placed in the server instance directory (commonly `My Documents/Battlefield 3/Server`) inside the `Admin/Mods` folder. Each mod has its own folder with a unique name.

## Mod descriptor

The most important file of a mod is the mod descriptor file: `mod.json`. This file is required for VU to be able to load the mod, and provides necessary information to know how to load it and execute it. It also provides additional metadata about the mod and its authors. We'll explain more about how this file is structured in the [mod creation guide](/modding/your-first-mod).

## Scripts

VeniceEXT Lua scripts are placed inside an `ext` folder which is present inside the mod folder. Inside this folder there are three more folders, which logically separate the execution environment of the scripts: `client`, `server`, and `shared`. As their name implies, scripts inside the `client` folder will only be executed on joining clients, scripts inside the `server` folder will only be executed on the server, and scripts inside the `shared` folder will be executed on both. However, VeniceEXT will not simple execute any Lua script present in these folders. Instead, it will look for a script with the `__init__.lua` filename, and that's the script that will be executed first. Then, that script can load other scripts from within its logical folder or the shared scripts.

## WebUI

Custom UI is bundled in a single WebUI package using the WebUI compiler, which must then be placed inside the mod folder and named `ui.vuic`. The server will then automatically send this file to joining clients that need it.

---

Next, see how to [create your first mod](/modding/your-first-mod).