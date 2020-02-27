---
title: Modding overview
---

Modding in VU is comprised of several different components and systems, each with its own purpose and functionality.

## Script mods (VeniceEXT)

The first and most important mod system is VeniceEXT. This is VU's custom scripting system which can be used to do everything from modify existing game mechanics to introducing entirely new gameplay experiences. VeniceEXT uses Lua as its underlying scripting language and is compatible with Lua 5.3. 

VeniceEXT mods are split into client, server, and shared scripts, which are executed on clients, servers, and both respectively. They can also communicate with each other and coordinate to perform various functions. See [here](/modding/veniceext) for more in-depth details on how VeniceEXT works.

## Custom UI (WebUI)

Another modding component is the WebUI, which is the custom UI layer of VU. Using it, you can create custom in-game UI by utilizing web technologies (such as HTML, CSS, and JS). The UI execution engine itself has limited access to in-game functionality, but it can communicate with VeniceEXT to create interactive experiences. For more information on the WebUI see [here](/modding/webui).

## File mods (Rime)

The last modding component is file modifications using Rime. Rime is a custom Frostbite editor that can be used to view, modify, and author custom game content (such as textures, models, etc.) Rime can create custom game data bundles that can then be loaded by the game via VeniceEXT to either replace existing content (such as textures) or add something entirely new. For more information about Rime see [here](/modding/rime).

---

Next up, see how [mods are structured](/modding/structure).