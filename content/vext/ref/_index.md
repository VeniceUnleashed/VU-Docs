---
title: API Reference
description: The full VU VeniceEXT API reference.
weight: 4
---

The VeniceEXT API is split into four logical sections and contains a variety of types, libraries, events, and hooks.

Here's a short description of each of those concepts:

- **Types**: These are used to represent various in-engine types and data structures, from entities and players to structures that can be used to modify game behavior.
- **Libraries**: These are globally available types that expose engine functionality to the modding interface, from managing players to spawning entities and modifying in-game logic.
- **Events**: Events are sent by the game engine to the modding interface under specific circumstances and can be used to perform specific actions at specific times. For example, one could listen for an event of when a level is loaded and perform their game logic there.
- **Hooks**: Hooks are similar to events, in that they are triggered by the game engine, but the main difference is that a mod can decide to modify how the hook acts, by modifiying its parameters or by cancelling it completely. For example, a hook can be used to prevent a specific player from joining a server.

For more in-depth information about these concepts make sure to go through the VeniceEXT guides, which present use-cases for all of these.

The four logical sections that these concepts are split into are the following:
- **[Client](/vext/ref/client/)**: This includes types, libraries, events, and hooks that are only accessible by client-side scripts.
- **[Server](/vext/ref/server/)**: This includes types, libraries, events, and hooks that are only accessible by server-side scripts.
- **[Shared](/vext/ref/shared/)**: This includes types, libraries, events, and hooks that are accessible by both client-side and server-side scripts.
- **[Frostbite](/vext/ref/fb/)**: This is a special section which contains Frostbite data structures that are accessible by both client-side and server-side scripts. These data structures can be used to modify game data at runtime.

For more information about the differences between client-side and server-side scripts please refer to the VeniceEXT starter tutorial.